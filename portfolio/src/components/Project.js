import React from "react";
import "./ProjectCard.css"; // Import your CSS file for styling
import { useLocation } from "react-router-dom"; // Import useLocation from React Router

const projects = [
  {
    title: "RESTful Shopping API (Spring Boot, Hibernate, Spring Security, Postman)",
    description:"Implemented user registration, authentication, and authorization functionalities to ensure secure access to the shopping platform Created endpoints for product listing, searching, and detailed product information retrieva",
    githubUrl: "https://github.com/yashdesai010/Java-REST-API-CRUD",  
},
  {
    title: "Budget Management (Java, XML, MySQL)",
    description: "Designed an intuitive and visually appealing user interface (UI) using XML layouts, ensuring a seamless and efficient user experience.Implemented robust budget tracking functionality that allowed users to input their income and expenses. The app provided real-time updates on their financial status, enabling better financial planning.",
    githubUrl: "https://github.com/yashdesai010/yashdesai010",  
},
  {
    title: "Social Media (NodeJs, MongoDB, CSS, Cloudinary)",
    description: "Implemented a robust user registration and authentication system using Node.js and MongoDB. Users could securely create accounts, log in, and manage their profiles.Leveraged Cloudinary for efficient image and video management, enabling users to upload and share media content seamlessly while optimizing storage space.Designed a personalized news feed algorithm that displayed posts from friends in chronological order. Implemented filters to allow users to view posts based on categories or specific friends",
    githubUrl: "https://github.com/yashdesai010/MERN-Social-Media", 
},
];

function Projects() {
  const location = useLocation();

  // Check if a notification message exists in the route state
  const notification = location.state && location.state.notification;
  const openGitHubRepo = (githubUrl) => {
    window.open(githubUrl, "_blank");
    
  };


  return (
    
    <section id="projects" className="bg-gray-100 py-16">
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          
          Projects
        </h2>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => openGitHubRepo(project.githubUrl)}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 text-lg">{project.description}</p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    openGitHubRepo(project.githubUrl); // Open GitHub repo when clicked
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;