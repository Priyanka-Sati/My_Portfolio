import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from '../Header/Header';
import conactvector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';

import './Contact.css';


const Contact = () => {
    return(
        <div className = "section-container">
            <Header 
                heading = "Get in touch"
                details = "Interested to collaborate? Feel free to drop me an email!"
            />



            <div className="contact-form-container">
                <form className="contact-form" 
                      action="https://formspree.io/f/mgerbyqy"
                      method="POST"
                >
                    <input 
                        type="email"
                        placeholder = "Your Email ID"
                        name="_replyto"
                        className = "input-box email-input"
                    />

                    
                    <textarea 
                        typr = "text"
                        placeholder = "Your Message"
                        name = "message"
                        className = "input-box body-input"
                  ></textarea>

                    <button tyoe = "submit" className = "contact-btn">
                        Send Email
                    </button>

                </form>
            </div>
            

            
            <div className="social-icons-container">
                <a href="https://github.com/Priyanka-Sati" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                        
                <a href="https://www.linkedin.com/in/priyanka-sati-04/" className="social-icon">
                    <img src={linkedin} alt="social" />
                </a>

            </div>

            <FooterLink phrase = "Read more " link = "about me." toAddress = "/about"/>

            <div className="vector-frame">
                <img src={conactvector} alt="contact vector" className = "about-vector"/>
            </div>

        </div>
    )
}

export default Contact;  