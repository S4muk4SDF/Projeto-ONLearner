import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Pagina_Login() {
    return (
        <div id="main_Login">

            <div id="card_sign_in">
                <div className="sign_in">
                    <Link to="/" className="float-right">Voltar</Link>

                    <h1>Sign In</h1>

                    <form>
                        <label>Email</label>
                        <input type="email"/>

                        <label>Senha</label>
                        <input type="password"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pagina_Login;
