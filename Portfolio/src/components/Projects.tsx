import Navigation from "./Navigation"
import "../styles/Projects.css"
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0,},
  
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, 
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
  
      <h2 className="project-title">My Projects</h2>

    <div className="project-container">
       <div className="project-child">child1</div>
       <div className="project-child">child 2</div>
       <div className="project-child"> child 3</div>
    </div>
   
   
    </motion.div>
  )
}
