require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS with options
const corsOptions = {
  origin: 'https://papaya-sherbet-f5509c.netlify.app/', // Replace with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable CORS with credentials (cookies, authorization headers)
  optionsSuccessStatus: 204, // For preflight requests
};

app.use(cors(corsOptions));

// Connect to your MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

// Define a Mongoose schema for feedback data
const feedbackSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  feedback: String,
});

// Create a Mongoose model based on the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Handle POST request to collect feedback
app.post('/api/feedback', async (req, res) => {
  const feedbackData = req.body;

  try {
    // Create a new feedback document with name, rating, and feedback fields
    const newFeedback = new Feedback({
      name: feedbackData.name,
      rating: feedbackData.rating,
      feedback: feedbackData.feedback,
    });

        await newFeedback.save();

    console.log('Feedback saved to MongoDB:', feedbackData);
    res.json({ message: 'Feedback received and saved successfully!' });
  } catch (error) {
    console.error('Error saving feedback to MongoDB:', error);
    res.status(500).json({ error: 'Error saving feedback' });
  
  }

});


// ... Your other server code ...

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
