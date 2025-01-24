import { useState } from 'react';
import Navigation from '../src/components/Navigation';
import {AnimatePresence, motion} from 'framer-motion'
import "./styles/styles.css"

 function Landing() {


  return (
    <div>
    <div className='Landing'>
    <Navigation/>

    
    <div className='info_container'>
    <h1>Leon Alexander Aysa</h1>
    <h3>Hi I'm a Frontend Developer</h3>

    </div>

    </div>


   
    </div>
  )
}

export default Landing
