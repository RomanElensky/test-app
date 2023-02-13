import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"

function App() {
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
    <div className="App" id='home'>
      <Header />
      <Jumbotron />
      <Portfolio />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
