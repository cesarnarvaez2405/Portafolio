import React, { useEffect, useState } from 'react'
import { RxChevronUp, RxLink2 } from "react-icons/rx";
import style from "./style/scrollToTop.module.css"
import pdf from './Content/HojaDeVida-CesarNarvaez.pdf'

export const ScrollToTop = () => {

    const [showScrollTop, seTshowScrollTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                seTshowScrollTop(true)
            } else {
                seTshowScrollTop(false)
            }
        });
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
        {showScrollTop && <RxChevronUp className= {`${style.botonScrollTop} ${style.topBtnStyle} ${"animate__animated animate__fadeInDown"}`} onClick={scrollTop}/>}
        {showScrollTop && <a href={pdf} target="_blank" rel="noopener noreferrer" download="HV-Portafolio-CesarNarvaez.pdf"> <RxLink2 className={`${style.botonHv} ${style.hvStyle} ${"animate__animated animate__fadeInDown"} `} /></a>}
        </>
    )
}
