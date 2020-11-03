import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.css'

class Card extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="card shadow">
                <img src={this.props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <Link to={`/${this.props.link}`} className="btn btn-primary">Entrar</Link>
                </div>
            </div>
        )
    }
}
export default Card;