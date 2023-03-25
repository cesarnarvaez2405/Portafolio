import React from 'react'
import style from '../style/banner.module.css'
import image from "../Content/img.jpeg";
import Spline from '@splinetool/react-spline';

export const BannerPortafolio = () => {

    // const image = require('../Content/imgPortafolio.jpeg');
    return (

        <>
            <div className={style.containerBanner}>
                <div className={`  ${"animate__animated animate__fadeInDown"} ${style.container}`}>
                    <div className={style.styleBanner}>
                        {/* <img src={image} alt="Imagen Portafolio" className={style.imgPortafolio} /> */}
                        {/* <img src={require('../Content/imgPortafolio.JPEG')} className= {style.imgPortafolio} alt="Imagen Portafolio"  /> */}
                        <Spline scene="https://prod.spline.design/oK-OtIYPKZthSX7U/scene.splinecode" />
                    </div>
                    <div className={style.textoBanner}>
                        <h1 className={style.cesarNarvaez}>Soy Cesar Narvaez</h1>
                        <p className={style.frontend}>Desarrollador Frontend <a className={style.spaceinvader}></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
