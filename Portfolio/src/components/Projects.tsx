import Navigation from "./Navigation"
import "../styles/Projects.css"
import { motion } from "framer-motion";
import pro from "../images/pro1.jpg"

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
    img: pro, 
    link_prev: "#",
    link_github: "#",
  },
  {
    title2: "Project 2",
    description2: "This is a description of project 2.",
    img2: "https://via.placeholder.com/400x250",
    link_prev: "#",
    link_github: "#",
  },
  {
    title3: "Project 3",
    description3: "This is a description of project 3.",
    img3: "https://via.placeholder.com/400x250",
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
      <h2 className="project-header">My Projects</h2>
      <p className="descriptions">Here are my Projects that I've been working with. Feel free to explore or send me suggestions for improvements</p>
      
      </div>

      <motion.div className="project-container" variants={containerVariants}>
        <motion.div className="project-child" variants={childVariants}>
          <img src={myprojects[0].img} alt="Project 1" className="project-image" />
          <h2 className="project-title">Rock, Paper & Scissor</h2>
        
        </motion.div>

        <motion.div className="project-child" variants={childVariants}>
        <img src={myprojects[0].img} alt="Project 1" className="project-image" />
         
        </motion.div>

        <motion.div className="project-child" variants={childVariants}>
        <img src={myprojects[0].img} alt="Project 1" className="project-image" />
        </motion.div>
      </motion.div>
    </motion.div>
   
   
   
  )
}
