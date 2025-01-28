import React from 'react';
import Navigation from '../src/components/Navigation';
import Typed from 'typed.js';
import "./styles/landingstyle.css";
import profile from "./images/smile.jpeg";




function Landing() {
  const text = React.useRef(null);


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
      <div className="Landing">
        <Navigation />
        <div className="info_container">
          <h1 className="name">Leon Alexander Aysa</h1>
          <h3 ref={text} className="description"/>
          <img src={profile} className='profile_img' alt="Profile" />
        </div>

        <div className='btn_container'>
         
          <button className='btn'>Download CV</button>
          <button className='btn'>Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;