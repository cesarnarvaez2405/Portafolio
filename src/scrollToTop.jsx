import React, { useEffect, useState } from 'react'
import { RxChevronUp } from "react-icons/rx";
import style from "./style/scrollToTop.module.css"

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
        </>
    )
}
