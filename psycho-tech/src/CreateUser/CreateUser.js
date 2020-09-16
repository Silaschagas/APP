import React from 'react';
import './CreateUser.css';
import '../App.css';
import icon_create from '../web_resource/CreateUser/create-user.png'
import $ from 'jquery';
   
const CreateUser = () =>{
    return(
        <div>
            <header id='header'>
                <div id='div_header'>
                    <img id='icon_create' src = {icon_create}/>
                    <h1 id='create_user'>Novo usuário</h1>
                </div>
            </header>
            <form id = 'form_user'>
                <input type="file" id="user_img" name="user_img" accept="image/*" placeholder="Selecione uma foto de perfil"></input>
                <input type='text' id='name' placeholder='Nome de usuário'></input>
                <input type='text' id ='first_name' placeholder='Nome'></input>
                <input type='text' id ='second_name' placeholder='Sobrenome'></input>
                <select id='gender'>
                    <option value = 'null'>Selecione uma opção</option>
                    <option value = 'F'>Feminino</option>
                    <option value = 'M'>Masculino</option>
                    <option value='N'>Não desejo informar</option>
                </select>
                <input type='tel' id ='cellphone' placeholder='Celular'></input>
                <input type='text' id ='CPF' placeholder='CPF/Código de Doutor'></input>
                <input type='email' id ='email' placeholder='E-mail'></input>
                <input type='email' id ='confirm_email' placeholder='Confirme o e-mail'></input>
                <input type='password' id ='password' placeholder='Senha'></input>
                <input type='password' id='confirm_password' placeholder='Confirme a senha'></input>
            </form>

            <button onClick={
                function create_user(){
                    var obj = {
                        name : $('#name').val().toString(),
                        id : 1
                    }

                    alert(obj.name + '  |  ' + obj.id )
                }
            }>Criar</button>

            <button>Cancelar</button>
        </div>
    )
}

export default CreateUser;