import React from 'react';
import Navigation from '../src/components/Navigation';
import Typed from 'typed.js';
import "./styles/landingstyle.css";
import profile from "./images/smile.jpeg";
import { motion } from "framer-motion";
import useCanvasCursor from "./styles/landingcursor"; 




function Landing() {
  useCanvasCursor(); 
  const [isTypingActive, setIsTypingActive] = React.useState(false);
  const textRef = React.useRef(null);

const borderchange = (): void => {

  const borders:string[] = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset",];
  const randborder:number = Math.floor(Math.random() * borders.length);

  const randcolor:string = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");  
  const profile:HTMLElement = document.querySelector(".profile_img") as HTMLElement;

 

  if(profile){
    profile.style.borderColor = "#" + randcolor;
    profile.style.borderStyle = borders[randborder]
  }
}


const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight, 
    behavior: "smooth",
  });
};




React.useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isTypingActive) {
        setIsTypingActive(true);
        const typed = new Typed(textRef.current, {
          strings: ['Hi I am a Frontend Developer', 'I create Web applications'],
          typeSpeed: 40,
          backSpeed: 60,
          startDelay: 500,
          backDelay: 4000,
          showCursor: false,
          loop: true,
        });

        return () => typed.destroy();
      }
    },
    { threshold: 0.1 }
  );

  if (textRef.current) observer.observe(textRef.current);
  return () => observer.disconnect();
}, [isTypingActive]);

  
  return (
  <div>
    <canvas id="canvas" className="custom-cursor"></canvas>
    <div className="Landing">


        <Navigation />
        <motion.div
  className="info_container"
  initial={{ opacity: 0, y: 30 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 2, ease: "easeOut", type: "spring", stiffness: 120 }}>

  <h1 className="name">Leon Alexander Aysa</h1>
  <h3 ref={textRef} className="description" />
  <div className="profile_wrapper">
  <img onClick={borderchange} src={profile} className="profile_img" alt="Profile" loading="lazy"/>
  </div>

</motion.div>


    <div className='center-con' >
    <div className="round" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>

 
 



      </div>
  </div>
  );
}

export default Landing;