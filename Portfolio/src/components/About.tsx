import React, { useRef, useEffect, useState} from "react";
import "../styles/aboutstyle.css"
import { motion, useInView } from "framer-motion";
import useCanvasCursor from "../styles/landingcursor"; 
import Typed from 'typed.js';



export default function About() {

  
  const text = React.useRef(null);
  
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, 
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ['arkanidas@Mac portfolio %', 'npm install skills@latest'],
      typeSpeed: 70,
      backSpeed: 60,
      startDelay: 500,
      backDelay: 10000,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useCanvasCursor(); 
  return (

 
    <div className='About'>
    <canvas id="canvas" className="custom-cursor"></canvas>
   
  <h1 className="title">About me</h1>

  <div className="about-container">

  <div className="Myinfo">
  <div className="cardmac">

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
  <div className="cardmac__content">

<h3 className="desc-title">Who Am I?</h3>
<hr style={{width:"10%"}}></hr>




  </div>
</div>



  </div>
  <div className="Myskills">




  <div className="container">
  <div className="card">
    <div className="header">

     <p className="skills">TERMINAL</p>
     <p className="skills">OUTPUT</p>
     <p style={{borderBottom:"1px solid #04395E"}} className="skills">SKILLS</p>
      <button className="copy">
     
        <svg
          className="w-[19px] h-[19px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div className="footer">
  <div className="code">
    <div className="icon">
      <svg
        className="w-[19px] h-[19px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="m9 5 7 7-7 7"
        ></path>
      </svg>
    </div>
   
    <div className="user-cmd">
    <p className="term_title" ref={text}>arkanidas@Mac portfolio % </p>
      <div className="text-container">
        <h4 className="skills_info">Javascript <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
</svg></h4>
        <h4 className="skills_info">CSS <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
</svg></h4>
        <h4 className="skills_info">Html <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
</svg></h4>
        <h4 className="skills_info">React</h4>
        <h4 className="skills_info">React Native</h4>
        <h4 className="skills_info">Node.js</h4>
        <h4 className="skills_info">React</h4>
        <h4 className="skills_info">React Native</h4>
        <h4 className="skills_info">Node.js</h4>
        <h4 className="skills_info">React</h4>
        <h4 className="skills_info">React Native</h4>
        <h4 className="skills_info">Node.js</h4>
      </div>
    </div>
  </div>
</div>
   
   

  </div>
  
</div>




  </div>


  </div>

       
    </div>
  )
}
