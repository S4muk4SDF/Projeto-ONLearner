import React from 'react'

import NavBar from '../../Home/Navbar'
import Cards from '../../Cards'

import './style.css'

function Materia_Portugues() {
    return (
        document.title = "ONLearner - 1ºEM - Português",
        <div>
            <NavBar />

            <div id="main_Pagina_Portugues_Conteudos">
                <h1>Conteudos disponíveis</h1>

                <div id="conteudos">
                    <Cards type="3" titulo="Fonologia" link="EM1/Portugues/Fonologia"/>
                    <Cards type="3" titulo="Ortografia" link="EM1/Portugues/Ortografia"/>
                    <Cards type="3" titulo="Pontuação" link="EM1/Portugues/Pontuação"/>
                </div>
            </div>
        </div>
    )
}

export default Materia_Portugues;
