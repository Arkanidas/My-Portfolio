import React, { useRef, useEffect, useState} from "react";
import "../styles/aboutstyle.css"
import { motion, useInView } from "framer-motion";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); // `once` replaces `triggerOnce`

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <div className='About'>
   
   <motion.div
  className="info_container"
  initial={{ opacity: 0, y: 10 }}
  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 100 }}

>
  <h1 style={{color:"white"}}>Leon Alexander Aysa</h1>
  <h3 className="description" />
  <img className="profile_img" alt="Profile" />
</motion.div>






   <div className="center-con">
    
    <div className="round">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
</div>

       
    </div>
  )
}
