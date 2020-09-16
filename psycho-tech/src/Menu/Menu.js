import React, {useState} from 'react';
import logo from '../web_resource/Menu/menu.png'
import diario from '../web_resource/Diary/notepad_512.png'
import '../Menu/Menu.css';

const Menu = () => {

    const [Nome,setNome] = useState("Contoso");

    return(
        <div className="div-main">
            <div className="div-main-header">
                <div>
                    <img className="img-menu-icon" src={logo}></img>
                    <h2 className="menu-h2">Menu</h2>
                </div>
            </div>

            <hr />
            
            <h3>Bem vindo {Nome} !</h3>

            <div>
                <div className="div.menu.line">
                    <div className="div-menu-icon">
                        <img className="menu-icon" src={diario}></img>
                        <h2>Nova nota</h2>                        
                    </div>

                    <div className="div-menu-icon">
                        <img className="menu-icon" src={logo}></img>
                    </div>

                    <div className="div-menu-icon">
                        <img className="menu-icon" src={logo}></img>
                    </div>

                    <div className="div-menu-icon">
                        <img className="menu-icon" src={logo}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu;