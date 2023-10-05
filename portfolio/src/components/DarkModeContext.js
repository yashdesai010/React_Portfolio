import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a custom hook to access the dark mode context
export function useDarkMode() {
  return useContext(DarkModeContext);
}

// Dark mode provider component
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or default to false
    return localStorage.getItem("darkMode") === "true";
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Store in localStorage
  };

  // Use useEffect to apply dark mode to the entire page
  useEffect(() => {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
