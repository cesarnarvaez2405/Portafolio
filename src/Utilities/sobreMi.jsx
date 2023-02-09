import React from 'react'
import style from '../style/sobreMi.module.css'
import { Slider } from './slider'

export const SobreMi = () => {
    const SvgComponent = (props) => (
        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#474bff"
                d="M455 294.5q-7 54.5-59.5 74.5t-94 30Q260 409 213 422t-75-26.5q-28-39.5-55-75t-48.5-86q-21.5-50.5 25-82t77.5-67q31-35.5 80-47t95 9.5q46 21 83 56t52 85.5q15 50.5 8 105Z"
            />
        </svg>
    )

    return (
        <>
            <div className={style.conteiner}>
                <div className={style.conteinerSobreMi}>
                    <div className={style.shape}>
                        {/* <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" >
                            <g>
                                <path fill="#474bff" d="M396,297.5Q377,355,323,380.5Q269,406,202.5,413Q136,420,101,361.5Q66,303,72.5,242Q79,181,100,107.5Q121,34,198.5,35.5Q276,37,315,90.5Q354,144,384.5,192Q415,240,396,297.5Z" />
                            </g>
                        </svg> */}
                    </div>
                    <div className="animate__animated animate__fadeInLeft">
                        <div className={style.conteinerContenido}>
                            <div className={style.contenidoSobreMi}>
                                <h1 className={style.titulo}>Sobre mi</h1>
                                <p className={style.parrafo}>Desarrollador junior Frontend con
2 años de experiencia en
desarrollo web en diferentes
tecnologías. Apasionado de la
programación con sólidos
conocimientos de programación
(Html 5, css 3, Typescript,
Javascript, React, SQL, Git).
Mi capacidad de generar ideas y
mi facilidad para trabajar en
equipos son mis principales
herramientas para trabajar y
crecer como desarrollador.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate__animated animate__fadeInRight">
                    <div className={style.conteinerMySkills}>
                        <h1 className={style.titleMySkills}>My skills</h1>
                        <Slider />
                    </div>
                </div>
            </div>
        </>
    )
}
