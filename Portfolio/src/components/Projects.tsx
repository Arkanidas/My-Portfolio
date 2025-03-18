import Navigation from "./Navigation"
import "../styles/Projects.css"
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0,},
  
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      duration:0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const myprojects = [
  {
    title: "Project 1",
    description: "This is a description of project 1.",
    imgSrc: "https://via.placeholder.com/400x250", 
    link_prev: "#",
    link_github: "#",
  },
  {
    title: "Project 2",
    description: "This is a description of project 2.",
    imgSrc: "https://via.placeholder.com/400x250",
    link_prev: "#",
    link_github: "#",
  },
  {
    title: "Project 3",
    description: "This is a description of project 3.",
    imgSrc: "https://via.placeholder.com/400x250",
    link_prev: "#",
    link_github: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
    className="Projects"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
      <Navigation/>
      <div className="description-container">
      <h2 className="project-title">My Projects</h2>
      <p className="descriptions">Here are my Projects that I've been working with. Feel free to explore or send me suggestions for improvements  </p>
      </div>

      <motion.div className="project-container" variants={containerVariants}>
        <motion.div className="project-child" variants={childVariants}>
          <img src="https://via.placeholder.com/400x250" alt="Project 1" className="project-image" />
        
        </motion.div>

        <motion.div className="project-child" variants={childVariants}>
          <img src="https://via.placeholder.com/400x250" alt="Project 2" className="project-image" />
          <h3>Project 2</h3>
          <p>Description for Project 2</p>
          <a href="#" className="project-button">View Project</a>
        </motion.div>

        <motion.div className="project-child" variants={childVariants}>
          <img src="https://via.placeholder.com/400x250" alt="Project 3" className="project-image" />
          <h3>Project 3</h3>
          <p>Description for Project 3</p>
          <a href="#" className="project-button">View Project</a>
        </motion.div>
      </motion.div>
    </motion.div>
   
   
   
  )
}
