import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaCode } from "react-icons/fa";


export const SidebarData = [
  {
    title: "About",
    path: "/Aboutpage",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <FaIcons.FaEnvelope />, // Change the icon to an envelope icon
    cName: "nav-text",
  },
  {
    title: "Education And Experience",
    path: "/Education And Experience",
    icon: <IoIcons.IoIosSchool />,    
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/Projects",
    icon: <FaCode />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    icon: <FaIcons.FaFilePdf />,
    cName: "nav-text",
    path: "https://drive.google.com/file/d/1UxY8W_LSLaglE_hmAoUbXspGJ7_PXjut/view", // Replace with the actual URL of your resume file
    download: "resume.pdf", // Specify the desired download filename
  },
  {
    title: "Certificate",
    icon: <FaIcons.FaCertificate />,
    cName: "nav-text",
    path: "https://www.hackerrank.com/certificates/5589ae6d6bbd", // Replace with the actual URL of your certificate file
    download: "certificate.pdf", // Specify the desired download filename
  },

  {
    title: "Rating",
    path:"/Rating",
    icon: <FaIcons.FaStar />,
    cName: "nav-text",
  },
];
