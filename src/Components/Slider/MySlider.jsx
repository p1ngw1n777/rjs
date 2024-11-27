import React from 'react';
import SliderComponent from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'

const MySlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 0.1,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <SliderComponent {...settings} style={{display: 'block'}}>
            <div>
                <img src="https://dominilash.ru/upload/iblock/2fa/bq663b44hleatq3uh3xt6c6i735era57/1920-na-540-2.jpg" alt="Slide 1" />
            </div>
            <div>
                <img src="https://dominilash.ru/upload/iblock/c6e/dk5ygwzr8thc396mezac8zinhajyrv81/photo_2024_04_19_11_58_00.jpg" alt="Slide 2" />
            </div>
        </SliderComponent>
    );
};

export default MySlider;