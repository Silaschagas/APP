import React from 'react';
import './Profile.css';
import '../App.css';
import defaultImage from '../web_resource/Profile/user3.png';

const Profile = () => {
    return(
        
        <div id="backgroud_img_profile">
            <img src={defaultImage} id="profile_img"></img>
            
            <div id="fields">
                <label>Nome</label>
                <input id="name" readOnly className="fields_form"></input>

                <label>E-mail</label>
                <input id="email" readOnly className="fields_form"></input>

                <label>Celular</label>
                <input id="cellphone" readOnly className="fields_form"></input>

                <label>Biografia</label><br></br>
                <textarea id="biography" cols="40" rows="6" className="fields_form_biography" readOnly></textarea>
            </div>


            

            <div id="timeline" className="timeline-text">
                <h3 style={{paddingTop:"5%"}}>Timeline</h3>
                
                <div className="timeline-text" className="timeline-element"> 
                    <h5>Example title</h5>
                    <p style={{fontSize:"10pt"}}>{
                        "Criado em : " +
                        new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " | " +
                        new Date().getHours().toString() +":"+ new Date().getMinutes()    
                    }</p> 
                </div>
            </div>

        </div>
            
    )
}

export default Profile;