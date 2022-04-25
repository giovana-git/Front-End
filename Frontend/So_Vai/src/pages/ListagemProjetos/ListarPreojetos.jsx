 import '../ListagemProjetos/css/lis.css'
 import {useState } from "react"
 import '../../UserPool'

 
 function TelaProjets() {
    

    

    const [ ListagemProjetos, setListagemProjetos ] = useState( [] )


    const [Excluir, setExcluir] = useState('')


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
                <button className="M_P_Button" value="sdas" >Criar Novo Projeto</button>
                <div className="Meus_proje_Area">
                    <div className="conteiner">
                        <h1>Meus Projetos</h1>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 1</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho">Excluir</button>
                            </div>
                        </div>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 2</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho">Excluir</button>
                            </div>
                        </div>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 3</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho">Excluir</button>
                            </div>
                        </div>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 4</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho" draggable="true">Excluir</button>
                            </div>
                        </div>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 5</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho">Excluir</button>
                            </div>
                        </div>
                        <div className="conteiner_Projeto">
                            <div className="Left">
                                <img src="img/File_Img.svg" alt="" />
                                <p>Projeto - Darede 6</p>
                            </div>
                            <div className="Right">
                                <button>Alterar</button>
                                <button className="Btn_Vermelho">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TelaProjets;