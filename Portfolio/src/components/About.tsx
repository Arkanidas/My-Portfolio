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
   
  <h1 className="title">About me</h1>

  <div className="about-container">

  <div className="Myinfo">
  <div className="card">

  <div className="tools">
    <div className="circle">
      <div className="redbox"></div>
    </div>
    <div className="circle">
      <div className="yellowbox"></div>
    </div>
    <div className="circle">
      <div className="greenbox"></div>
    </div>
  </div>
  <div className="card__content">
  </div>
</div>



  </div>
  <div className="Myskills">





  </div>


  </div>

       
    </div>
  )
}
