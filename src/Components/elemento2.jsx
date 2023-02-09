import React from 'react'
import { Proyectos } from '../Utilities/proyectos'
import style from '../style/elemento2.module.css'
import { Link } from 'react-router-dom'

export const Elemento2 = () => {
  return (
    <>

      <div  className= {style.containerProyectos}>
        <Link to='/' className={style.volver}>Volver</Link>
        <Proyectos />
      </div>

    </>
  )
}
