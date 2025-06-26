import Navigation from "./Navigation"
import "../styles/temp.css"
import { motion} from "framer-motion";
import bracket from "../images/brackets.png"
import bildhistoria2 from "../images/bildhistoria2.png"
import movieapp from "../images/movieapp.png"
import game from '../images/game.png'


interface Project {
  title: string;
  description: string;
  img: string;
  link_prev: string;
  link_github: string;
}


const containerVariants = {
  hidden: { opacity: 0,},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, 
      duration:1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 150},
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};



const myprojects:Project[] = [
  {
    title: "Rock, Paper & Scissor",
    description: "This is a classic Rock, Paper & Scissor game. It is built using HTML, CSS and Javascript. Battle against the computer and see who wins.",
    img: game, 
    link_prev: "https://rock-paper-scissor-game-lake-six.vercel.app/",
    link_github: "https://github.com/Arkanidas/Rock_Paper_Scissor_Game",
  },
  {
    title: "Bildhistoria",
    description: "Bildhistoria - Sweden's largest place for copyright free historical photographs. Together with backend, frontend and cloud developers we have created Bildhistoria for everyone to use & explore ",
    img: bildhistoria2,
    link_prev: "https://blogg.bildhistoria.se/projektet-bildhistoria-avvecklas/",
    link_github: "https://github.com/svenskt-portrattarkiv/bildhistoria",
  },
  {
    title: " CinemaXynapse - Movie App",
    description: "This is a project where I used the IMDB Api to display movies and its content to the web page for the user to explore.",
    img: movieapp,
    link_prev: "https://movie-app-phi-lemon.vercel.app/",
    link_github: "https://github.com/Arkanidas/Movie-App",
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
      const duration = Math.random() * (50 - 30) + 50; 
      const delay = Math.random() * 3; 

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
        <motion.div className="project-child" variants={childVariants}  whileHover={{ scale: 1.05 }}>
          <img src={myprojects[0].img} alt="Project 1" className="project-image" loading="lazy" />
          <h2 className="project-title">{myprojects[0].title}</h2>
          <div className="skill-container">
            <div className="skill" style={{ backgroundColor: "#E3552B" }}>HTML</div>
            <div className="skill" style={{ backgroundColor: "#1B75B8" }}>CSS</div>
            <div className="skill" style={{ backgroundColor: "#F7E025", color:"black" }}>Javascript</div>
          </div>

          <p className="project-description">{myprojects[0].description}</p>

         <div className="button-container">
           <a href={myprojects[0].link_github}>
         <div className="github-button"><img src={bracket} style={{width:"30px", height:"30px", marginTop:"10%"}}></img></div>
           </a>

           <a href={myprojects[0].link_prev}>
         <div className="prev-button">Live Preview <div className="live-icon"></div></div>
           </a>
         
         </div>
        </motion.div>

        <motion.div className="project-child" variants={childVariants}  whileHover={{ scale: 1.05 }}>
        <img src={myprojects[1].img} style={{}}alt="Project 1" className="project-image" loading="lazy" />
          <h2 className="project-title">{myprojects[1].title}</h2>
          <div className="skill-container">
            <div className="skill" style={{ backgroundColor: "#087ECE" }}>TypeScript</div>
            <div className="skill" style={{ backgroundColor: "#85CCD7", color:"black" }}>React</div>
            <div className="skill" style={{ backgroundColor: "#8A18FD", color:"white" }}>Bootstrap</div>
            <div className="skill" style={{ backgroundColor: "none", color:"black", border:"1.5px solid black" }}>Docker</div>
          </div>

          <p className="project-description">{myprojects[1].description}</p>

          <div className="button-container">
           <a href={myprojects[1].link_github}>
            <div className="github-button"><img src={bracket} style={{width:"30px", height:"30px", marginTop:"10%"}}></img></div>
           </a>
               
           <a href={myprojects[1].link_prev}>
            <div className="prev-button">Live Preview <div className="live-icon"></div></div>
           </a>
          </div>
        </motion.div>

        <motion.div className="project-child" variants={childVariants}  whileHover={{ scale: 1.05 }}>
        <img src={myprojects[2].img} alt="Project 1" className="project-image" loading="lazy" />
        <h2 className="project-title">{myprojects[2].title}</h2>
        <div className="skill-container">
            <div className="skill" style={{ backgroundColor: "#F7E025", color:"black"}}>Javascript</div>
            <div className="skill" style={{ backgroundColor: "#85CCD7", color:"black" }}>React</div>
            <div className="skill" style={{ backgroundColor: "#1B75B8", color:"white" }}>CSS</div>
            <div className="skill" style={{ backgroundColor: "none", color:"black", border:"1.5px solid black" }}>Api</div>
          </div>

          <p className="project-description">{myprojects[2].description}</p>

          <div className="button-container">
          <a href={myprojects[2].link_github}>
         <div className="github-button"><img src={bracket} style={{width:"30px", height:"30px", marginTop:"10%"}}></img></div>
         </a>
               
          <a href={myprojects[2].link_prev}>
         <div className="prev-button">Live Preview <div className="live-icon"></div></div>
         </a>
          </div>
        </motion.div>

       
      </motion.div>
    </motion.div>
   
   

  )
}
