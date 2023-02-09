import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../style/slider.module.css'
import image1 from '../Content/skill(1).svg';
import image2 from '../Content/skill(2).svg';
import image3 from '../Content/skill(3).svg';
import image4 from '../Content/skill(4).svg';
import image5 from '../Content/skill(5).svg';

export const Slider = () => {


    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className={style.img4}
                        src={image4}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className= {style.img}
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={style.img}
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={style.img}
                        src={image1}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={style.img}
                        src={image5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>




        </>
    )
}

