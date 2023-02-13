import React from "react";
import './Header.css';
import logo from '../../images/b-logo.png'

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt='logo'></img>
                <div className="header__text-container">
                    <h2 className='header__name'>BLA BLA</h2>
                    <h3 className='header__text'>One Page Flat Template</h3>
                </div>
            </div>
            <nav className="header__navigation">
                <a href="#home" className="header__link">HOME</a>
                <a href="#portfolio" className="header__link">PORTFOLIO</a>
                <a href="#about-us" className="header__link">ABOUT</a>
                <a href="#contact-us" className="header__link">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header