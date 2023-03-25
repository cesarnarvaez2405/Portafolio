import React from 'react'
import style from '../style/btnWrap.module.css'

export const BtnWrap = () => {
    return (
        <>
            <div className={style.btn_wrap}>
                <span>a</span>
                <div className={style.container}>
                    <i className={`${style.fab} ${style.fa_facebook_f}`}>Hola</i>
                    <i className={`${style.fab} ${style.fa_twitter}`}>Soy</i>
                    <i className={`${style.fab} ${style.fa_instagram}`}>El</i>
                    <i className={`${style.fab} ${style.fa_gitHub}`}>Cesar</i>
                </div>
            </div>

        </>
    )
}
