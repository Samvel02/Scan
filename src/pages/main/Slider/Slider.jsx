import React, { useState } from "react";
import './styleSlider.css';

import Time from '../../../images/slider/Time.svg'
import Search from '../../../images/slider/Search.svg'
import Security from '../../../images/slider/Security.svg'
import LeftArrow from '../../../images/slider/LeftArrow.svg'
import RightArrow from '../../../images/slider/RightArrow.svg'

const TextTime = () => {
  return (
    <p className='text-block-container'>
      Высокая и оперативная скорость 
      <br></br>обработки заявки
    </p>  
  )
}

const TextSearch = () => {
  return (
    <p className='text-block-container'>
      Огромная комплексная база 
      <br></br>данных, обеспечивающая 
      <br></br>объективный ответ на запрос
    </p>  
  )
}

const TextSecurity = () => {
  return (
    <p className='text-block-container'>
      Защита конфеденциальных сведений, 
      <br></br>не подлежащих разглашению по 
      <br></br>федеральному законодательству
    </p>  
  )
}



const MySlider = () => {
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const slides = [
    { id: 1, 
      img: Time , 
      text: <TextTime /> },
    { id: 2, 
      img: Search, 
      text: <TextSearch /> },   
    { id: 3, 
      img: Security, 
      text: <TextSecurity /> },
    { id: 4, 
      img: Time , 
      text: <TextTime /> },
    { id: 5,
      img: Search, 
      text: <TextSearch /> },
    { id: 6, 
      img: Security, 
      text: <TextSecurity /> },
  ];

  const handlePrevSlide = () => {
    setFirstVisibleIndex(
      firstVisibleIndex === 0 ? slides.length - 3 : firstVisibleIndex - 1
    );
  };

  const handleNextSlide = () => {
    setFirstVisibleIndex(
      firstVisibleIndex === slides.length - 3 ? 0 : firstVisibleIndex + 1
    );
  };

  const visibleSlides = slides.slice(firstVisibleIndex, firstVisibleIndex + 3);

  while (visibleSlides.length < 3) {
    visibleSlides.push(slides[0]);
  }

  return (
    <div className="container-slide">
      <div className="slider">
      <img src={LeftArrow} className="left-arrow" alt="img" onClick={handlePrevSlide} />
      {visibleSlides.map((slide) => (
        <div
          key={slide.id}
          className="slide"
        >
          <img src={slide.img} alt="img" className="image"/>
          <p>{slide.text}</p>
        </div>
      ))}
      <img src={RightArrow} className="right-arrow" alt="img"  onClick={handleNextSlide} />
      </div>
    </div>
    
  );
};

export {MySlider};