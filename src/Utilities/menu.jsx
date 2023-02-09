import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/menu.module.css'
import 'animate.css';
import pdf from '../Content/HV-CesarNarvaez.pdf'


export const Menu = () => {
    return (

        <>
            <div className={style.ContenedorMenu}>
                <div className={style.ElementosMenu}>
                    <Link to='/' className={style.InicioMenu}>Portafolio</Link>
                    <Link to='/elemento-2' className={style.Elemento2Menu}>Proyectos</Link>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="HV-Portafolio-CesarNarvaez.pdf" className={style.DescargarPortafolio}>Descargar portafolio<div className= {style.contenedorShape}><a className={style.shapeDescargarPortafolio}></a></div></a>
                    {/* <Link to='/descargar-portafolio' className={style.DescargarPortafolio}>Descargar portafolio<div className= {style.contenedorShape}><a className={style.shapeDescargarPortafolio}></a></div></Link> */}
                </div>
            </div>
        </>
    )
}
