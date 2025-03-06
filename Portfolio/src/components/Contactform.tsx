import { useState } from 'react'
import "../styles/contactstyle.css"
import { RxQuestionMarkCircled } from "react-icons/rx";
import emailjs from "emailjs-com";
import {toast, Toaster} from "react-hot-toast"



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


  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lastSubmit = localStorage.getItem("lastSubmit");

  if (lastSubmit) {
    const lastSubmissionTime = new Date(lastSubmit);
    const now = new Date();
    const diffInHours = (now.getTime() - lastSubmissionTime.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      toast("You can only send one message per day. Please try again later.", {
        icon: "⚠️",
        position: "bottom-center",
        style: {
            background: "orange",
            color: "#fff",
            fontFamily: "arial"
        },
    });
      return; 
    }
  }

    const templateParams = {
        from_name: formData.name,  
        from_email: formData.email, 
        message: formData.message, 
    };

    const submitText:HTMLDivElement = document.querySelector(".sign-text") as HTMLDivElement;
    submitText.innerText = "Sending...";
     
    emailjs.send(
       serviceId,    
       templateId,     
       templateParams,
       userId  
    ).then(
      (response) => {
        
        console.log(response)
        setFormData({ name: "", email: "", message: "" });
        submitText.innerText = "Send";
        toast("Message Sent Sucessfully!", {
          icon: "✅",
          position: "bottom-center",
          style: {
            background: "green",
            color: "#fff",
            fontFamily:'arial'
          },
        });
        
        localStorage.setItem("lastSubmission", new Date().toISOString());
      },
      (error) => {
        console.log(error)
        toast("Failed to send email, Please try again", {
          icon: "❌",
          position: "bottom-center",
          style: {
            background: "red",
            color: "#fff",
            fontFamily:'arial'
          },
        });
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


   <Toaster
  position="bottom-center"
  reverseOrder={true}
/>

  </div>



     





  
  )
}
