import React from 'react';
import '../Styles/Contact.css';
import ContactFooter from '../Components/ContactFooter';
import Envelope from '../Assets/envelope.png';


function Contact() {
  return (
    <div className='contactPageContainer'>
        <form className='contactInfo'>
            <h1>Contact</h1>
            <div className="wrapper wrapperOne">
                <div className='box'>
                    <input type="text" id='name' required />
                    <label htmlFor="name"><i class="fa-solid fa-user"></i> Your Name</label>
                </div>
                <div className='box'>
                    <input type="text" id='email' required/>
                    <label htmlFor="email"><i class="fa-solid fa-at"></i> Email</label>
                </div>
            </div>
            <div className="wrapper wrapperTwo">
                <div className='box'>
                    <textarea id='message' required rows='5'/>
                    <label htmlFor="message"><i class="fa-solid fa-message"></i> Message...</label>
                </div>
            </div>
            <button className='sendMessageButton'>Send Message</button>
        </form>
        <div className='photo'>
            <img src={Envelope} alt='' />
        </div>
        <ContactFooter />
    </div>
  )
}

export default Contact