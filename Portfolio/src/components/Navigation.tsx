import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/landingstyle.css";


const Navigation = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [MenuActive, setMenuActive] = useState<boolean>(false);


  const Togglemenu = () => {
    setShowLinks(!showLinks);
    setMenuActive(!MenuActive);
  };

 
  return (
    <div>
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

    </div>
  );
};

export default Navigation;