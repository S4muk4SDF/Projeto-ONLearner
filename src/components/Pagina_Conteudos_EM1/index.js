import React from 'react'

import NavBar from '../Home/Navbar'
// import Card_Materias from './Card_Materias'
import Cards from '../Cards'

import './style.css'

function Pagina_Conteudos() {
    return (
        document.title = "ONLearner - 1º Ensino Médio",
        <div>
            <NavBar />

            <div id="main_Pagina_Materias">
                <h1>Matérias disponíveis</h1>

                <div id="materias">
                    <Cards type="2" titulo="Português" img="https://www.flaticon.com/svg/static/icons/svg/2463/2463149.svg" link="EM1/Portugues"/>
                    <Cards type="2" titulo="Matemática" img="https://www.flaticon.com/svg/static/icons/svg/1739/1739515.svg" link="EM1/Matemática"/>
                </div>
            </div>
        </div>
    )
}

export default Pagina_Conteudos;
