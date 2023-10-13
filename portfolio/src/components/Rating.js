import React, { useState } from 'react';
import './Rating.css'; // Import your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Rating() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Successfully Submitted");
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, rating, feedback }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? faStar : faStar;
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={starIcon}
          className={i <= rating ? 'star star-filled' : 'star star-empty'}
          onClick={() => setRating(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold">
            Rating:
          </label>
          <div className="rating">{renderRatingStars()}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-bold">
            Feedback:
          </label>
          <textarea
            id="feedback"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
          
        </div>  
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rating;
