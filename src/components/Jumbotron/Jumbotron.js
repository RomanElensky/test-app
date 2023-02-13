import React from 'react';
import './Jumbotron.css'

function Jumbotron() {
    return (
        <div className='jumbotron'>
            <div className='jumbotron__image'>
                <h1 className='jumbotron__title'>We Build <span>Brand</span></h1>
                <h2 className='jumbotron__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</h2>
                <button className='jumbotron__button' type='button'>LEARN MORE</button>
                <button className='jumbotron__element' type='button'></button>
            </div>
        </div>
    )
}

export default Jumbotron