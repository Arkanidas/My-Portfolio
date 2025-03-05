import { useState } from 'react'
import "../styles/contactstyle.css"
import { RxQuestionMarkCircled } from "react-icons/rx";
import emailjs from "emailjs-com";
import { sub } from 'framer-motion/client';



export default function Contactform() {

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const [Tip, setTip] = useState<boolean>(false);




const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const lastSubmit = localStorage.getItem("lastSubmit");

  if (lastSubmit) {
    const lastSubmissionTime = new Date(lastSubmit);
    const now = new Date();
    const diffInHours = (now.getTime() - lastSubmissionTime.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      alert("You can only send one message per day. Please try again later.");
      return; 
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
        from_name: formData.name,  
        from_email: formData.email, 
        message: formData.message, 
    };

    const submitText = document.querySelector(".sign-text") as HTMLDivElement;
    submitText.innerText = "Sending...";
     
    emailjs.send(
       serviceId,    
       templateId,     
       templateParams,
       userId  
    ).then(
      (response) => {
        alert("Email sent successfully!");
        console.log(response)
        setFormData({ name: "", email: "", message: "" });
        submitText.innerText = "Send";
      },
      (error) => {
        alert("Failed to send email.");
        console.log(error)
      }
    );
  };


    const ShowTip: () => void  = () => {
        setTip(!Tip)

        if (Tip === true) {
          alert("Feel free to send me an Email, just to say hello or to ask me anything you want to know about me or my projects. I'm also open to networking and collaborating for future projects :)")
          setTip(!false)
          console.log(Tip);    
     }
    }


  return (
  <div>
   

   <form className="form" onSubmit={handleSubmit}>

    <div className="head-container">
      <div className="title-2">Send me an Email! </div>
      <div className="tooltip-container" onClick={ShowTip}>
      <RxQuestionMarkCircled className="questionmark" style={{width:"30px", height:"30px"}}/>
</div>

</div>


      <label className="fname" htmlFor="name">Name</label>
      <div className="input-container">
 
        <input className="input-name" type="text" name="name" placeholder="Enter Your Name" required onChange={handleChange} value={formData.name}></input>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <label className="fname" htmlFor="email">Mail</label>

      <div className="input-container">
        <input className="input-mail" type="mail" name="email" required placeholder="Enter Your Mail" onChange={handleChange} value={formData.email}></input>
      </div>

      <label className="fname" htmlFor="message">Message</label>
      <div className="input-container">
      <textarea className="input-message" name="message" placeholder='Enter Your Message' onChange={handleChange} value={formData.message}></textarea>
      </div>

      <button type="submit" className="submit">
        <div className="sign-text">Send</div>
      </button>

     
   </form>




  </div>



     





  
  )
}
