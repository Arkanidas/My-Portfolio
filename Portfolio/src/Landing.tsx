import React, { useState, useEffect } from 'react';
import Navigation from '../src/components/Navigation';
import Typed from 'typed.js';
import "./styles/landingstyle.css";
import profile from "./images/smile.jpeg";
import { motion } from "framer-motion";
import useCanvasCursor from "./styles/landingcursor"; 




function Landing() {
  const text = React.useRef(null);
  useCanvasCursor(); 



const borderchange = (): void =>{

  const borders:string[] = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset",];
  const randborder:number = Math.floor(Math.random() * 9);

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
    const typed = new Typed(text.current, {
      strings: ['Hi I am a Frontend Developer', 'I create Web applications'],
      typeSpeed: 40,
      backSpeed: 60,
      startDelay: 500,
      backDelay: 4000,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  
  return (
  <div>
    <canvas id="canvas" className="custom-cursor"></canvas>
    <div className="Landing">


        <Navigation />
        <motion.div
  className="info_container"
  initial={{ opacity: 0, y: 30 }} // Start invisible and slightly lower
  animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
  transition={{ duration: 2, ease: "easeOut", type: "spring", stiffness: 120 }}

>
  <h1 className="name">Leon Alexander Aysa</h1>
  <h3 ref={text} className="description" />
  <img onClick={borderchange} src={profile} className="profile_img" alt="Profile" />
  <p>hello</p>
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