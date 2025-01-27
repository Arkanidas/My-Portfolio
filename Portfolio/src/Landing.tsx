import React, { useEffect, useContext } from 'react';
import Navigation from '../src/components/Navigation';
import Typed from 'typed.js';
import "./styles/landingstyle.css";
import profile from "./images/smile.jpeg";
import { FullpageContext } from '@ap.cx/react-fullpage'; // Import FullpageContext

// Define the Fullpage API interface
interface FullpageApi {
  moveSectionDown: () => void;
  moveSectionUp: () => void;
  moveTo: (sectionIndex: number) => void;
  setAllowScrolling: (allow: boolean) => void;
  // Add other methods as needed
}

function Landing() {
  const text = React.useRef(null);
  const fullpageApi = useContext(FullpageContext) as FullpageApi; // Cast to FullpageApi type

  // Debugging: Log fullpageApi to check if it's defined
  console.log('Fullpage API:', fullpageApi);

  React.useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ['Hi I am a Frontend Developer', 'I create Web applications'],
      typeSpeed: 40,
      backSpeed: 60,
      startDelay: 500,
      backDelay: 4000,
      showCursor: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Function to navigate to the Contact section
  const navigateToContact = () => {
    if (fullpageApi) {
      console.log('Navigating to Contact section...');
      fullpageApi.moveTo(3); // Move to the third section (Contact)
    } else {
      console.error('Fullpage API is not available.');
    }
  };

  return (
    <div>
      <div className="Landing">
        <Navigation />
        <div className="info_container">
          <h1 className="name">Leon Alexander Aysa</h1>
          <h3 ref={text} className="description" />
          <img src={profile} className='profile_img' alt="Profile" />
        </div>
        <div className='btn_container'>
          <button className='btn'>Download CV</button>
          {/* Add onClick event to navigate to Contact section */}
          <button className='btn' onClick={navigateToContact}>Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;