import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './inicio'
import { DescargarPortafolio } from './descargarPortafolio'
import { Elemento2 } from './elemento2'


export const Portafolio = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/elemento-2' element={<Elemento2 />} />
                    <Route path='/descargar-portafolio' element={<DescargarPortafolio />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
