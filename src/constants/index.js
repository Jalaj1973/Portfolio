import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate engineering student with a focus on developing robust and scalable web applications.I have gained hands-on experience in Python, machine learning, web development, and database management. My goal is to leverage my skills to create innovative solutions that drive growth and deliver exceptional user experiences. With a continuous drive to learn and adapt, I aim to make impactful contributions in the tech industry.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic engineering student in my final year at Graphic Era Hill University, with a keen interest in technology and innovation. My experience spans Python programming, machine learning, web development, and database management. Driven by a passion for understanding how systems work, I continuously seek to expand my knowledge and tackle new challenges. I thrive in collaborative environments and am committed to applying my skills to develop impactful solutions. Outside of my studies, I enjoy exploring emerging technologies and contributing to various projects to enhance my learning and practical experience.`;



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "File Encryption and Decryption App",
    image: project2,
    description:
      "A Java application with a graphical user interface (GUI) that allows users to encrypt and decrypt various file types using robust cipher algorithms. The app ensures secure handling of sensitive data through encryption, and it offers a user-friendly interface for selecting files and managing the encryption and decryption processes.",
    technologies: ["Java", "Java Swing", "Java Cryptography Architecture", "JUnit"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Brain Tumor Detection Using CNN" ,
    image: project4,
    description:
      "This ML project focuses on detecting brain tumors using Convolutional Neural Networks (CNNs). The CNN model is trained on MRI brain scans to identify and classify tumor types with high accuracy.",
    technologies: ["Python", "Mahine Learning", "OpenCV", "TensorFlow/Keras"],
  },
];

export const CONTACT = {
  address: "Clemont Town Dehradun ",
  phoneNo: "8476812985",
  email: "jalajbalodi264@gmail.com",
};
