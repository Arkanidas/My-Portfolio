import React, { useRef, useEffect, useState} from "react";
import "../styles/aboutstyle.css"
import { motion, useInView } from "framer-motion";
import useCanvasCursor from "../styles/landingcursor"; 




export default function About() {

  
 
  
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, 
      behavior: "smooth",
    });
  };


  useCanvasCursor(); 
  return (

 
    <div className='About'>
    <canvas id="canvas" className="custom-cursor"></canvas>
   





   <div className="center-con2" >
    
    <div className="round2" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
</div>

       
    </div>
  )
}
