import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/landingstyle.css";
import { motion } from "framer-motion";
import logo from "../images/logga7.png"


const Navigation = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [MenuActive, setMenuActive] = useState<boolean>(false);


  const Togglemenu = () => {
    setShowLinks(!showLinks);
    setMenuActive(!MenuActive);
  };

 
  return (
    <motion.div
  initial={{ opacity: 0, y: -200 }} 
  animate={{ opacity: 1, y: 0, x: 0 }} 
  transition={{ duration: 1, ease: "easeOut"}} 
>
      <div className="Navigation">
        <Link to="/">
      <img src={logo} alt="Logo" className="logo" loading="lazy"/>
      </Link>
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