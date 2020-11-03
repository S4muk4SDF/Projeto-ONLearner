import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

class NavBar extends Component {
    render() {
        return (
            <>
                <div className="Navbar">
                        <h1>ONLearner</h1>
                        <div className="login">
                            <Link to="/register">Registrar-se</Link>
                            <Link to="/login">Entrar</Link>
                        </div>
                </div>
            </>
        )
    }
}
export default NavBar;