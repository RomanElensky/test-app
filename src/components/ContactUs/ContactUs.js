import React from "react";
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact" id="contact-us">
            <h2 className="contact__title">Contact Us</h2>
            <h3 className="contact__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
            <div className="contact__container">
                <div className="contact__form">
                    <div className="contact__input-container">
                        <input className="contact__input" type='text' placeholder="Your name" minLength="2" maxLength="30" required></input>
                        <input className="contact__input" type='email' placeholder="Your email" minLength="2" maxLength="30" required></input>
                    </div>
                    <input className="contact__message-input" type='text' placeholder="Your message" minLength="2" maxLength="300" required></input>
                    <button className="contact__button" type="submit">SUBMIT</button>
                </div>
                <div className="content__map-container">
                    <h2 className="content__map-text"> Bla Bla Company 125009 Moscow, Red Square 1</h2>
                    <div className="content__map"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab7900d002b9e9d0e4879fc34b7087038fce9cff19b0025091e20a5c21cbc7374&amp;source=constructor" width='100%' height='100%' frameBorder="0"></iframe></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs