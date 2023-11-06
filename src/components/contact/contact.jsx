import React, { useRef } from 'react'
import './contact.css';
import walmart from '../../assets/walmart.png'; 
import adobe from '../../assets/adobe.png'; 
import microsoft from '../../assets/microsoft.png'; 
import facebook from '../../assets/facebook.png'; 
import fbIcon from '../../assets/facebook-icon.png';
import insta from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
const Contact= () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dpbh1wk', 'template_mfuktys', form.current, 'lYhS0ndXoj9bxV1rg')
          .then((result) => {
              console.log(result.text);
              alert('Email has been sent');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
   <section id="contactPage">
    <div id="clients">
    <h1 className="contactPageTitle">My Clients</h1>
    <p className="contactPagePara">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad fuga impedit illum distinctio soluta quae doloribus officia reiciendis accusamus.
    </p>
    <div className="clientImgs">
        <img src={walmart} alt="" className="clientimg" />
        <img src={adobe} alt="" className="clientimg" />
        <img src={microsoft} alt="" className="clientimg" />
        <img src={facebook} alt="" className="clientimg" />
    </div>
    </div>
    <div id="contact">
    <h1 className="contactPageTitle">Contact Me</h1>
    <p className="contactPagePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio quis error tenetur, ducimus quo magni soluta ut incidunt! Labore!</p>


    <form className="contactForm"  ref={form} action="" onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='your_name'/>
        <input type="email" className='email' placeholder='Enter your email' name='your_email'/>
        <textarea name="message" rows="5" placeholder='your message' className='msg'></textarea>
        <button type='submit' value='send' className="submitBtn">Submit</button>
    </form>
    <div className="links">
        <img src={fbIcon} alt="" className="link" />
        <img src={youtube} alt="" className="link" />
        <img src={insta} alt="" className="link" />
        <img src={twitter} alt="" className="link" />
    </div>
    </div>
   </section>
  )
}

export default Contact;
