import "../styles/contactstyle.css"
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function Contactform() {
  return (
  <div>
   
   <form className="form">

    <div className="header-container">
      <div className="title-2">Send me an Email! </div>

      <div className="tooltip-container">
      <div className="tooltip">Uiverse.io</div>
      <RxQuestionMarkCircled className="questionmark" style={{width:"30px", height:"30px"}}/>
</div>
</div>


      <label className="fname">Your name:</label>
      <div className="input-container">
 
        <input className="input-name" type="text" placeholder="Enter Your Name"></input>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <label className="fname">Your Mail:</label>
      <div className="input-container">
        <input className="input-mail" type="text" placeholder="Enter Your Mail"></input>
      </div>

      <label className="fname">Your Message:</label>
      <div className="input-container">
      <textarea className="input-message" name="message" placeholder='Enter Your Message'></textarea>
      </div>

      <button type="submit" className="submit">
        <div className="sign-text">Send</div>
      </button>

     
   </form>




  </div>



     





  
  )
}
