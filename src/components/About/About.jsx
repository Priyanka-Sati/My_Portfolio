import React from "react";
import './About.css';

import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import aboutVector from '../../assets/about_vector.png';
import photo from '../../assets/1.jpg'

const About = () => {
    return (
        <div className = "section-container">
            <Header 
                heading = "About Me."
                details = "Student | Self Motivated | Quick Learner "
            />


            <div className="about-main">
                <div className="about-main-left">

                    <h3 className="about-sub-head">Student</h3>
                    <p className="about-details">
                        My name is Priyanka Sati. I am from G.B.Pant Institute of Engineering and Technology Pauri Garhwal. Currently I am in my final year B-Tech with Computer Science Branch. {' '}
                        <a href="" className="about-link-element"></a>

                    </p>

                    <h3 className="about-sub-head">Coding Enthusiastic</h3>
                    <p className="about-details">
                        I have a keen interest in coding. Have good knowledge of Data Structure and Algorthims. I have done more then 400 questions covering almost every topics of data structure and algorithms. {' '}
                        <a href="" className="about-link-element"></a>

                    </p>

                    <h3 className="about-sub-head">Web Developer</h3>
                    <p className="about-details">
                        Along with coding web development also fasinates me. So I try to learn new technologies which are in trend. I have also made some projects using React, JavaScript, HTML, CSS. Check out my projects using link below{' '}
                        <a href="mailto: priyankasati042@gmail.com" className="about-link-element"></a>

                    </p>
                    
                </div>

                <div className="about-main-right">
                    <img src={photo} alt="animation" className="about-anime" />
                </div>

            </div>


            <FooterLink 
                phrase = 'Check out my '
                link = 'projects'
                toAddress = '/projects'
            />

            <div className="vector-frame">
                <img src = {aboutVector} className = "about-vector" alt="about" />
            </div>

        </div>
    )
}

export default About; 