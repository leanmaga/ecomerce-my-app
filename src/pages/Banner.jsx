'use client'

import React, { useEffect } from 'react'

import Model2 from '../assets/2.jpg'
import Model3 from '../assets/3.jpg'
import Model4 from '../assets/4.jpg'
import Model5 from '../assets/5.jpg'
import Model6 from '../assets/6.jpg'
import Left from '../assets/left.svg'
import Right from '../assets/right.svg'
import Image from 'next/image'


const totalSlides = 5; // Actualiza con el número total de slides

const Banner = () => {
    
    const moveSlide = (direction) => {
      const slideContainer = document.getElementById('slide');
      const lists = slideContainer.querySelectorAll('.item');

      if (direction === 'next') {
        slideContainer.appendChild(lists[0]);
      } else {
        slideContainer.prepend(lists[lists.length - 1]);
      }
    };

    useEffect(() => {
      document.getElementById('prev').onclick = () => moveSlide('prev');
      document.getElementById('next').onclick = () => moveSlide('next');
    }, []);

  return (
    <section className="w-full h-screen">
      <div id="slide" className="container">
        
        <div className="item">
          <Image src={Model2} alt="model1" className=""/>
          <div className="content">
            <div className="name">MODERN</div>
            <div className="des">lorem106</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item">
          <Image src={Model3} alt="model2" className=""/>
          <div className="content">
            <div className="name">MODERN</div>
            <div className="des">lorem106</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item">
          <Image src={Model4} alt="model3" className=""/>
          <div className="content">
            <div className="name">MODERN</div>
            <div className="des">lorem106</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item">
          <Image src={Model5} alt="model4" className=""/>
          <div className="content">
            <div className="name">MODERN</div>
            <div className="des">lorem106</div>
            <button>See more</button>
          </div>
        </div>
        <div className="item">
          <Image src={Model6} alt="model5" className=""/>
          <div className="content">
            <div className="name">MODERN</div>
            <div className="des">lorem106</div>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <button id='prev' ><Image src={Left}/></button>
        <button id='next' ><Image src={Right}/></button>
      </div>
    </section>
  )
}

export default Banner