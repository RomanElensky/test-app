import React from 'react';
import './Portfolio.css';

function Portfolio() {
    const buttons = document.querySelectorAll('.portfolio__button')
    const cards = document.querySelectorAll('.portfolio__item')


    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowALL = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowALL) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })
    return (
        <div className='portfolio' id='portfolio'>
            <h2 className='portfolio__title'>Portfolio</h2>
            <h3 className='portfolio__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
            <nav className='portfolio__filter'>
                <button className='portfolio__button' data-filter='all'>ALL</button>
                <button className='portfolio__button' data-filter='web'>WEB DESIGN</button>
                <button className='portfolio__button' data-filter='graphic'>GRAPHIC DESIGN</button>
                <button className='portfolio__button' data-filter='flat'>FLAT DESIGN</button>
            </nav>
            <div className='portfolio__container' id='nav'>
                <a href="" className="portfolio__item web item1"></a>
                <a href="" className="portfolio__item graphic item2"></a>
                <a href="" className="portfolio__item flat item3"></a>
                <a href="" className="portfolio__item web item4"></a>
                <a href="" className="portfolio__item graphic item5"></a>
                <a href="" className="portfolio__item flat item6"></a>
                <a href="" className="portfolio__item web item1"></a>
                <a href="" className="portfolio__item graphic item2"></a>
            </div>
        </div>
    )
}

export default Portfolio;