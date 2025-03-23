import Navigation from "./Navigation"
import "../styles/Projects.css"
import { motion } from "framer-motion";
import pro from "../images/pro1.jpg"
import bracket from "../images/brackets.png"


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
    title: "Rock, Paper & Scissor",
    description: "This is a classic Rock, Paper & Scissor game. It is built using HTML, CSS and Javascript. Battle against the computer and see who wins.",
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

export default function Projects({count = 50}) {
  return (
   
    <motion.div
    initial="hidden"
    animate="visible"
  
  >
     

      <Navigation/>
      <div className="description-container">
      <h2 className="project-header">My Projects</h2>
     
      <p className="descriptions">Here are my Projects that I've been working with. Feel free to explore or send me suggestions for improvements</p>
      
      </div>

      <motion.div className="project-container" variants={containerVariants}>
      <div className="particle-container">
  {Array.from({ length: count }).map((_, index) => {
    const duration = Math.random() * (50 - 30) + 30; 
    const delay = Math.random() * 5; 


    return (
      <div
        key={index}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  })}
</div>
        <motion.div className="project-child" variants={childVariants}>
          <img src={myprojects[0].img} alt="Project 1" className="project-image" />
          <h2 className="project-title">{myprojects[0].title}</h2>
          <div className="skill-container">
            <div className="skill" style={{ backgroundColor: "#E3552B" }}>Html</div>
            <div className="skill" style={{ backgroundColor: "#1B75B8" }}>CSS</div>
            <div className="skill" style={{ backgroundColor: "#F7E025", color:"black" }}>Javascript</div>
          </div>

          <p className="project-description">{myprojects[0].description}</p>

          <div className="button-container">
         <div className="github-button"><img src={bracket} style={{width:"30px", height:"30px", marginTop:"10%"}}></img></div>
         <div className="prev-button">Live Preview <div className="live-icon"></div></div>
          </div>
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
