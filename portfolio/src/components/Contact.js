import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import email and phone icons
import "./contact.css"; // Create a CSS file for styling

export default function Contact() {
  const recipientEmail = "yashdesai010@gmail.com";
  const subject = "Hiring Inquiry";
  const body = "I'm interested in hiring your services as a software developer.";

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        If you're interested in hiring a skilled software developer, feel free to get in touch:
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">Email: yashdesai010@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">Phone: +91 7874 537 800</span>
        </div>
      </div>

      {/* Add a "Send Email" button */}
      <a href={mailtoLink} className="send-email-button">
        Send Email
      </a>
    </div>
  );
}
