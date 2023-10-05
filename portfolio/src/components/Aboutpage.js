import "./Aboutpage.css";
import { useDarkMode } from "./DarkModeContext"; // Import the hook
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaMoon, // Moon icon for dark mode
  FaSun,   // Sun icon for light mode
  FaDatabase,
  FaGithub, 
  FaLinkedin,
} from "react-icons/fa";

const skills = [
  { skill: "Java", icon: <FaJava />, percentage: 90 },
  { skill: "SpringBoot", icon: <FaJava />, percentage: 90 },
  { skill: "JavaScript", icon: <FaJs />, percentage: 80 },
  { skill: "React", icon: <FaReact />, percentage: 95 },
  { skill: "Node.js", icon: <FaNodeJs />, percentage: 90 },
  { skill: "HTML5", icon: <FaHtml5 />, percentage: 90 },
  { skill: "CSS3", icon: <FaCss3 />, percentage: 85 },
  { skill: "SQL", icon: < FaDatabase />, percentage: 85 },
  // Add more skills with icons and percentages
];

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`about ${darkMode ? "dark" : ""}`}>
      <div className="about-content">
        <h1 className={`about-title ${darkMode ? "dark" : ""}`}>About Me
        <a href="https://github.com/yashdesai010" target="_blank" rel="noopener noreferrer">
      <FaGithub className="github-icon" />
    </a>
    <a href="https://www.linkedin.com/in/yash-desai-342085221/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="linkedin-icon" />
    </a>
        </h1>

        <p className={`about-description ${darkMode ? "dark" : ""}`}>
          I am a passionate software developer with experience in front-end and
          back-end technologies. I love creating web applications and solving
          complex problems.
        </p>
      </div>

      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </div>

      <div className="skills">
        <h2 className={`skills-title ${darkMode ? "dark" : ""}`}>Skills</h2>
        <ul className="skills-list">
          {skills.map((item, index) => (
            <li key={index} className={`skill ${darkMode ? "dark" : ""}`}>
              <span className="skill-icon">{item.icon}</span>
              <span className="skill-name">{item.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DarkModeToggle;
