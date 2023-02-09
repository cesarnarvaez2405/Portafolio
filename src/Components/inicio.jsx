import React from 'react'
import { Link } from 'react-router-dom'
import { BannerPortafolio } from '../Utilities/bannerPortafolio'
import { Menu } from '../Utilities/menu'
import style from '../style/inicio.module.css'
import { SobreMi } from '../Utilities/sobreMi'
import { Slider } from '../Utilities/slider'
import { Proyectos } from '../Utilities/proyectos'


export const Inicio = () => {
    return (
        <>

            <div className='MenuPortafolio'>
                <Menu />
            </div>
            <div className={style.BannerPortafolio}>
                <BannerPortafolio />
            </div>
            <div className={style.sobreMi}>
                <SobreMi />
            </div>
            <div className={style.proyectos}>
                <Proyectos />
            </div>


        </>
    )
}
