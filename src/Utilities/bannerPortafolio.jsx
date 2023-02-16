import React from 'react'
import style from '../style/banner.module.css'
import image from "../Content/img.jpeg";

export const BannerPortafolio = () => {

    // const image = require('../Content/imgPortafolio.jpeg');
    return (

        <>
            <div className= {style.containerBanner}>
                <div class="animate__animated animate__fadeInDown" className= {style.container}>
                    <div className= {style.infoBanner}>
                        <img src= {image} alt="Imagen Portafolio" className= {style.imgPortafolio} />
                        {/* <img src={require('../Content/imgPortafolio.JPEG')} className= {style.imgPortafolio} alt="Imagen Portafolio"  /> */}
                        <div>
                            <h1 className={style.cesarNarvaez}>Soy Cesar Narvaez</h1>
                            <p className={style.frontend}>Desarrollador Frontend <a className={style.spaceinvader}></a></p>
                        </div>
                    </div>
                </div>     
            </div>
        </>
    )
}
