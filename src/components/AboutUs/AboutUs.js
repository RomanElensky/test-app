import React from 'react';
import './AboutUs.css';
import img1 from '../../images/ava-1.png'
import img2 from '../../images/ava-2.png'
import img3 from '../../images/ava-3.png'
import fb from '../../images/fb.png'
import tw from '../../images/tw.png'
import google from '../../images/google.png'
import icon from '../../images/icon.png'

function AboutUs() {
    return (
        <div className='about' id='about-us'>
            <h2 className='about__title'>About Us</h2>
            <h3 className='abot__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
            <div className='about__container'>
                <div className='about__image-container'>
                    <img className='about__image' src={img1} alt="img" />
                    <h3 className="about__name">Melannie Doe</h3>
                    <h3 className="about__job">Project Manager</h3>
                    <h3 className="about__description">Ut wisi enim ad minim veniam, quis nostrud exerci tation</h3>
                    <div className='about__link-container'>
                        <a href="#3" className='about__link'><img src={fb} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={tw} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={google} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={icon} alt='fb' /></a>
                    </div>
                </div>
                <div className='about__image-container'>
                    <img className='about__image' src={img2} alt="img" />
                    <h3 className="about__name">Jhonnie Doe</h3>
                    <h3 className="about__job">Graphic Designer</h3>
                    <h3 className="about__description">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</h3>
                    <div className='about__link-container'>
                        <a href="#3" className='about__link'><img src={fb} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={tw} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={google} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={icon} alt='fb' /></a>
                    </div>
                </div>
                <div className='about__image-container'>
                    <img className='about__image' src={img3} alt="img" />
                    <h3 className="about__name">Daniel Doe</h3>
                    <h3 className="about__job">Web Designer</h3>
                    <h3 className="about__description">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</h3>
                    <div className='about__link-container'>
                        <a href="#3" className='about__link'><img src={fb} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={tw} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={google} alt='fb' /></a>
                        <a href="#3" className='about__link'><img src={icon} alt='fb' /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs;