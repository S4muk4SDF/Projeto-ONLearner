import React from 'react';

import './style.css'

import NavBar from './Navbar';
import Sidebar from './Sidebar'
// import Card from './Card';
import Cards from '../Cards';

function Home() {
    return (
        document.title = "ONLearner - Home",
        <div>
            <NavBar />

            <div id="main_Home">
                <Sidebar />
                
                <div className="conteudo">
                    <h1>Bem vindo à ONLearner, seu novo jeito de estudar!</h1>
                    <h1>Escolha a sua série:</h1>
                    <div id="materias">
                        <Cards type="1" titulo="1º Ensino Médio" img="https://www.flaticon.com/svg/static/icons/svg/3174/3174914.svg" link="EM1" />
                        <Cards type="1" titulo="2º Ensino Médio" img="https://www.flaticon.com/svg/static/icons/svg/3174/3174720.svg" link="EM2" />
                        <Cards type="1" titulo="3º Ensino Médio" img="https://www.flaticon.com/svg/static/icons/svg/3174/3174822.svg" link="EM3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;