import React from 'react'

import './style.css'

function Sidebar() {
    return (
        <div className="info_Lateral">
            <div className="info_Perfil">
                <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/100547180_1725110200974479_261654694777061376_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=V-EY_G2ycEYAX-J36nS&_nc_ht=scontent-gru2-2.xx&oh=d20deb2bf58a486b0e7289d9e6f9d559&oe=5FC2308F" />
                <h3>Samuel Dias</h3>
                <p>sdf.dias.faria@gmail.com</p>
                <span></span>
            </div>
            <div className="opcoes_Lateral">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828673.svg"></img>
                <a>Dashbord</a>
            </div>
            <div className="opcoes_Lateral">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"></img>
                <a>Perfil</a>
            </div>
            <div className="opcoes_Lateral">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3579/3579154.svg"></img>
                <a>Configurações</a>
            </div>
        </div>
    )
}

export default Sidebar;
