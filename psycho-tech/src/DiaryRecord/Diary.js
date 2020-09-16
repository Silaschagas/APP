import React, {useState} from 'react';
import '../DiaryRecord/Diary.css';
import icon from  '../web_resource/Diary/notepad.png';

const Diary = () => {

    const [Title , setTitle] = useState('Exemplo');
    const [Dia, setDia] = useState("14");
    const [Mes, setMes] = useState("09");
    const [Ano, setAno] = useState("2020");
    const [Content, setContent] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const [Doctor, setDoctor] = useState("Example Doctor");
    const [Visto, setVisto] = useState("Não");

    return(
        <div>
            <div id="div-page-title">
                <img id="icon" src={icon}></img>
                <h2 id="title">Registro de Diário</h2>
            </div>
            <hr />
            <div className="div-record">
                <h5>Título {Title} | Criado em {Dia}/{Mes}/{Ano}</h5>    
                <div id="content">
                    <h3>Decrição:</h3>
                    <p>{Content}</p>
                    <p className="doctor"><b>Compartilhado com:</b> {Doctor}</p>
                    <p className="doctor"><b>Visto:</b> {Visto}</p>
                </div>        
            </div>

            <div>
                <button>
                    Voltar
                </button>
            </div>
        </div>
    )
};


export default Diary;