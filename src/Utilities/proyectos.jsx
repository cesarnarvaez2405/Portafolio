import React from 'react'
import style from '../style/proyectos.module.css'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

export const Proyectos = () => {

    defineElement(lottie.loadAnimation);

    const mystyle = {
        width: "150px",
        height: "150px",
        cursor: "pointer",
        colors: "primary:#121331,secondary:#5c5cf0",
        left: "30px"
    };



    return (
        <>

            <div className={style.tituloContainer}>

                <h1 className={style.tituloProyectos}>Proyectos</h1>

            </div>

            <div className={style.containerProyectos}>

                <div className={style.containerList}>

                    <div className={style.animation}>

                        <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/tdxypxgp.json"
                            trigger="hover" style={mystyle}>
                        </lord-icon>

                        <h1 className={style.tituloProyecto}>Peliculas Api</h1>
                        <p className={style.descripcionProyecto}>Lista de peliculas del mes con la informacion mas importante, datos exportado mediante una Api.</p>

                        <div className={style.containerBotones}>
                            <a href='https://calm-mooncake-6da592.netlify.app/' className={style.buttom}>Demo</a>
                            <a href='https://github.com/cesarnarvaez2405/proyecto-pelis-vite.git' className={style.buttom}>Repo</a>
                        </div>

                    </div>

                </div>

                <div className={style.containerList}>

                    <div className={style.animation}>

                        <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/wxnxiano.json"
                            trigger="morph" style={mystyle}>
                        </lord-icon>

                        <h1 className={style.tituloProyecto}>Bloc de notas</h1>
                        <p className={style.descripcionProyecto}>Proyecto tipo crud para guardar informacion, editarla o eliminarla.</p>

                        <div className={style.containerBotones}>
                            <a href='https://comforting-pithivier-7158af.netlify.app/' className={style.buttom}>Demo</a>
                            <a href='https://github.com/cesarnarvaez2405/react-redux-crud-proyect.git' className={style.buttom}>Repo</a>
                        </div>

                    </div>

                </div>

                <div className={style.containerList}>

                    <div className={style.animation}>

                        <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/gqzfzudq.json"
                            trigger="hover" style={mystyle}>
                        </lord-icon>

                        <h1 className={style.tituloProyecto}>Api Nasa</h1>
                        <p className={style.descripcionProyecto}> Proyecto de imagenes y su descripcion publicada por la nasa, esta informacion es exportada mediante la api de la Nasa. </p>

                        <div className={style.containerBotones}>
                            <a href='https://teal-cucurucho-a2fec6.netlify.app/' className={style.buttom}>Demo</a>
                            <a href='https://github.com/cesarnarvaez2405/proyecto-nasa-api.git' className={style.buttom}>Repo</a>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
