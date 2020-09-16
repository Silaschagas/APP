import React from 'react';
import '../Login/Login.css'
import icon from '../web_resource/Login/psychology.svg';



class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
    }
    

    componentDidMount(){
        console.log(this.username);
        console.log(this.password);
    }


    render(){
        return(
            <div>
                <main>
                    <img src={icon} id='figure' alt="psychoTech"/>
                    <h2 id="bem_vindo">Bem vindo</h2>
    
                    <hr id="separator" />
    
                    <div id="div_username">
                        <h3 className="login_labels">Usuário ou email</h3>
                        <input ref={this.username} id="username" type="email" className="login_inputs"></input>
                    </div>
    
                    <div id="div_password">
                        <h3 className="login_labels">Senha</h3>
                        <input ref={this.password} id="password" type="password" className="login_inputs"></input>
                    </div>                   
    
                    <div id="div_buttons">
                        <button id="login" className="login_buttons">Entrar</button>
                        <button className="login_buttons">Cadastrar</button>
                    </div>
      
                </main> 
            </div>
        )
    }
};


export default LoginScreen;