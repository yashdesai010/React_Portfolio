import React from "react";
import "./education.css";

export default function EducationAndExperience() {
  return (
    <div className="education-experience">
      <h1 className="section-title">Education and Experience</h1>
      <div className="timeline">
        <div className="timeline-card">
          <div className="timeline-content">
            <h2 className="timeline-title">Bachelor's Degree In Information Technology</h2>
            <p className="timeline-description">GLS University (2020)</p>
            <p className="timeline-description">GPA: 8.0</p>   
          </div>
        </div>
       
        {/* Add two more timeline cards below */}
        <div className="timeline-card">
          <div className="timeline-content">
            <h2 className="timeline-title">Master's Degree In Information Technology</h2>
            <p className="timeline-description">Gujarat Technological University (2022)</p>
            <p className="timeline-description">GPA: 8.2</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-content">
            <h2 className="timeline-title">Software Engineer</h2>
            <p className="timeline-description">Shrine Software Private Limited (2022 - 2023)</p>
            {/* Add a description for Software Engineering below */}
            <p className="timeline-description">
              As a Software Engineer at Shrine Software Private Limited, I worked on developing and maintaining
              web applications using cutting-edge technologies. My responsibilities included
              front-end and back-end development, collaborating with cross-functional teams,
              and ensuring the scalability and performance of the software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
