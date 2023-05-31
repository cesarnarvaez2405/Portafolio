import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BannerPortafolio } from './Utilities/bannerPortafolio'
import { Menu } from './Utilities/menu'
import style from './style/inicio.module.css'
import { SobreMi } from './Utilities/sobreMi'
import { Slider } from './Utilities/slider'
import { Proyectos } from './Utilities/proyectos'
import { ScrollToTop } from './scrollToTop'
import { BtnWrap } from './Utilities/btnWrap'

export const Inicio = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    // Estilo para agregar en cada div o contenedor

    // style={{transform: `translateY(${offsetY * 0.2}px)`}}
    

    return (
        <>

            <ScrollToTop />

            <div className='MenuPortafolio'   >
                <Menu />
            </div>
            <div className={style.BannerPortafolio}    >
                <BannerPortafolio />
            </div>
            <div className={style.sobreMi} >
                <SobreMi />
            </div>
            <div className={style.proyectos}>
                <Proyectos />
            </div>


        </>
    )
}
