import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Pagina_Register() {
    return (
        <div id="main_Register">

            <div id="card_sign_in">
                <div className="sign_up">
                    <Link to="/" className="float-right">Voltar</Link>

                    <h1>Sign Up</h1>

                    <form>
                        <label>Nome</label>
                        <input type="name" />

                        <label>Sobrenome</label>
                        <input type="lastname" />

                        <label>Email</label>
                        <input type="email" />

                        <label>Senha</label>
                        <input type="password" />

                        <label>Confirmar Senha</label>
                        <input type="password" />
                    </form>
            </div>
        </div>
        </div >
    )
}

export default Pagina_Register;
