import '../ListagemProjetos/css/lis.css'
import { useState, useEffect } from "react"
import '../../UserPool'
import axios from "axios";
import Modal from "react-modal";
Modal.setAppElement("#root");


function TelaProjetos() {
    const [ListaProjetos, setListaProjetos] = useState([""])
    const [Excluir, setExcluir] = useState('')
    const [username, setUsername] = useState(0);
    const [project_name, setNomeprojeto] = useState("");

    function buscarMeusProjetos() {
        axios.get("http://44.204.225.182:8000/api/get_projects/rrrrr/", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaProjetos(resposta.data);
                     console.log(resposta.data)
                    // console.log(listaConsultas)
                }
            }).catch(erro => console.log(erro));
    }

    useEffect(buscarMeusProjetos, [], "");

    function cadastrarProjetos(evento) {
        evento.preventDefault();
        axios.post("http://44.204.225.182:8000/api/create_projects/", {
            username: username,
            project_name: project_name
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log("projeto cadastrado");
                    setUsername([]);
                    setNomeprojeto([]);
                }
            }).catch(erro => console.log(erro))
    }


    return (
        <>
            <div className="M.conteiner"></div>
            <header className="M_P_Header">
                <div className="M_P_Left">
                    <img src="img/cloud_Main.svg" alt="" />
                </div>
                <div className="M_P_Right">
                    <img src="img/User_Img.svg" alt="" />
                    <img src="img/Exit_Img.svg" alt="" />
                </div>
            </header>
            <div className="M_P_conteiner">
                <button className="M_P_Button" value="sdas" onClick={cadastrarProjetos}>Criar Novo Projeto</button>
                <input type="text" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                <input type="text" placeholder="Nome do Projeto" value={project_name} onChange={(evt) => setNomeprojeto(evt.target.value)} />

                {/* <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <h2>Cadastro de Projeto</h2>
                    <input></input>
                    <input></input>
                    <button>Cadastrar</button>
                    <button onClick={closeModal}>Close</button>
                </Modal> */}
                <div className="Meus_proje_Area">
                    <div className="conteiner">
                        <h1>Meus Projetos</h1>
                        {
                        ListaProjetos.map((project_name) => {
                            return (
                                <div className="conteiner_Projeto">
                                    <div className="Left">
                                        <img src="img/File_Img.svg" alt="" />
                                        <p>{project_name}</p>
                                    </div>
                                    <div className="Right">
                                        <button>Editar</button>
                                        <button className="Btn_Vermelho" >Excluir</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );
}
export default TelaProjetos;