import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import biaOne from '../img/bia.jpg';
import biaTwo from '../img/bia3.png';
import biaThree from '../img/biiia.png';
import './center.scss';

export default function ContentCenter() {
    return (
        <div className="content-center">
            <Carousel >
              <Carousel.Item interval={1000} >
                <img className="d-block w-100 " src={biaOne} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1000} >
                <img className="d-block w-100 " src={biaTwo} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1000} >
                <img className="d-block w-100 " src={biaThree} alt="" />
              </Carousel.Item> </Carousel >  
        </div>
    )
}
