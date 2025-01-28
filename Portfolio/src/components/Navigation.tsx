import { useState } from "react";
import "../styles/landingstyle.css";
import Projects from "./Projects"; // Import Projects component
import Landing from "../Landing"; // Import Landing component

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [MenuActive, setMenuActive] = useState(false);


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
            <p className="link-paragraph">Home</p>
          </li>
          <li>
            <p className="link-paragraph">Projects</p>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navigation;