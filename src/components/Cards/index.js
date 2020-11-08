import React from 'react'
import {Link} from 'react-router-dom';

import './style.css'

function Cards(props) {

    const {type, img, titulo, link} = props

    if (type === "1") {
        return (
            <div className="card shadow card_Type_1">
                <img src={img} className="card-img-top card_img_Type_1" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title card_title_Type_1">{titulo}</h5>
                    <Link to={`/${link}`} className="btn btn-primary card_btn_Type_1">Entrar</Link>
                </div>
            </div>
        )
    } else if (type === "2") {
        return (
            <div className="card shadow card_Type_2">
                <img src={img} className="card-img-top card_img_Type_2" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title card_title_Type_2">{titulo}</h5>
                    <Link to={`/${link}`} className="btn btn-primary card_btn_Type_2">Estudar</Link>
                </div>
            </div>
        )
    } else if (type === "3") {
        return (
            <div className="card shadow card_Type_3">
                <div className="card-body">
                    <h5 className="card-title card_title_Type_3">{titulo}</h5>
                    <Link to={`/${link}`} className="btn btn-primary card_btn_Type_3">Estudar</Link>
                </div>
            </div>
        )
    }
}

export default Cards
