"use client"

import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>
      <div className='work__filters mb-4'>
        <span className='work__item' onClick={() => setItems(Menu)}>All</span>
        <span className='work__item' onClick={() => filterItem ("ui ux")}>UI/UX</span>
        <span className='work__item' onClick={() => filterItem ("Web Application")}>Web Application</span>
        <span className='work__item' onClick={() => filterItem ("Frontend")}>Frontend</span>
        <span className='work__item' onClick={() => filterItem ("Email Template")}>Email Template</span>
      </div>

      <div className='work__container grid'>

      {Items.map((elem) => {
        const{id,Image, title, category} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__thumbnail'>
              <img src={Image} alt="" className='work__img'/>
              <div className='work__mask'></div>
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
            {/* <a href='https://github.com/0x1Luffy' className='work__button'></a> */}
            <a href='https://gitlab.com/asnegi1991' className='work__button'></a>
             <i className='icon-link work__button-icon'></i>
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio