
import { useState } from "react"
import "../styles/styles.css"

const Navigation = () => {

const [showLinks, setShowLinks] = useState(false);
const [MenuActive, setMenuActive] = useState(false);

const Togglemenu = () => {
setShowLinks(!showLinks);
setMenuActive(!MenuActive);
}


  return (
    <div className="Navigation">

<div className={`hamburger-menu ${MenuActive ? "burger-active" : ''}`} onClick={Togglemenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      
      <ul className={`Link-selection ${showLinks ? 'show-links' : ''}`}>

<a href="#"><li><p className='link-paragraph'>Home</p></li></a>
<a href="#"><li ><p className='link-paragraph'>About</p></li></a>
<a href="#"><li><p className='link-paragraph'>Projects</p></li></a>

      </ul>






    </div>
  )
}

export default Navigation
