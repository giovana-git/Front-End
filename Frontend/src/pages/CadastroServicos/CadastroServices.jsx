import '../ListagemProjetos/css/lis.css'
import { useState, useEffect } from "react"
import '../../UserPool'
import axios from "axios";
import Modal from "react-modal";
Modal.setAppElement("#root");


export default function CadastroForms() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("East US");
    const [username, setUsername] = useState("");
    const [project_name, setNomeprojeto] = useState("");

    function cadastrarRGroup(evento) {
        evento.preventDefault();
        axios.post("http://54.165.113.191:8080/api/resource_group/", {
            name: name,
            location: location,
            project: 
            {
                username: username,
                project_name: project_name
            }
            
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log("projeto cadastrado");
                    setName("");
                    setLocation("");
                    setUsername([]);
                    setNomeprojeto([]);
                }
            }).catch(erro => console.log(erro))
    }

    return (
        <div>
            <form action="#" className="sign-in-form" onSubmit={cadastrarRGroup}>
                <input type="text" placeholder="Nome do recurso" value={name} onChange={(evt) => setName(evt.target.value)} />
                <input type="text" placeholder="Location" value={location} onChange={(evt) => setLocation(evt.target.value)} />
                <input type="text" placeholder="Nome do recurso" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                <input type="text" placeholder="Location" value={project_name} onChange={(evt) => setNomeprojeto(evt.target.value)} />
                
                <button className="M_P_Button" value="sdas" onClick={cadastrarRGroup}>Criar Novo Recurso</button>
            </form>

        </div>
    )
}