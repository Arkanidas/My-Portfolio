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

<h3>Who Am I?</h3>





  </div>
</div>



  </div>
  <div className="Myskills">




  <div className="container">
  <div className="card">
    <div className="header">
      <p className="skills">Terminal</p>
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
        <span className="icon">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m9 5 7 7-7 7"
            ></path>
          </svg>
        </span>
        <p className="text">npm install -D tailwindcss</p>
      </div>
      <div className="code">
        <span className="icon">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m9 5 7 7-7 7"
            ></path>
          </svg>
        </span>
        <p className="text">npx tailwindcss t</p>
      </div>
    </div>
  </div>
</div>




  </div>


  </div>

       
    </div>
  )
}
