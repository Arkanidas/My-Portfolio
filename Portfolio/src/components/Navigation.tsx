import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/landingstyle.css";
import { motion } from "framer-motion";



const Navigation = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [MenuActive, setMenuActive] = useState<boolean>(false);




  const Togglemenu = () => {
    setShowLinks(!showLinks);
    setMenuActive(!MenuActive);
  };

 
  return (
    <motion.div
  initial={{ opacity: 0, y: -200 }} // Start invisible and slightly lower
  animate={{ opacity: 1, y: 0, x: 0 }} // Fade in and move to normal position
  transition={{ duration: 1, ease: "easeOut"}} 
 >
      <div className="Navigation">
        <div
          className={`hamburger-menu ${MenuActive ? "burger-active" : ""}`}
          onClick={Togglemenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`Link-selection ${showLinks ? "show-links" : ""}`}>
          <li>
          <Link to="/" className="link-paragraph">
              Home
            </Link>
          </li>
          <li>
          <Link to="/projects" className="link-paragraph">
              Projects
            </Link>
        
          </li>
        </ul>
      </div>

    </motion.div>
  );
};

export default Navigation;