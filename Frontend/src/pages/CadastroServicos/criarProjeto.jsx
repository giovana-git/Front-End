// import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// Componentes
import  Header from '../../components/header/header'

//css
import '../../assets/css/pages/criarProjeto.css'

//imgs
import iconVM from '../../assets/img/computer-solid.svg'
import RGImg from '../../assets/img/resource-group-img.svg'
import VM from '../../assets/img/vm-scale-set.svg'
import iconNet from '../../assets/img/wifi.svg'
import Net1 from '../../assets/img/image28.svg'
import Net2 from '../../assets/img/router-xxl.svg'
import iconScript from '../../assets/img/scriptIcon.svg'
import securityIcon from '../../assets/img/security-group-img.svg'

const passos = [
    {
        id: 'passo1'
    },
    {
        id: 'passo2'
    },
    {
        id: 'passo3'
    }
];


export default function CriarProjeto() {
    const [passoAtual, setPassoAtual] = useState(0);
    const [nomeGR, setNomeGR] = useState('');
    const [regiao, setRegiao] = useState('');
    const [nomeRede, setNomeRede] = useState('');
    const [blocoIP, setBlocoIP] = useState();
    const [nomeSubRede, setNomeSubRede] = useState('');
    const [blocoIPSubrede, setBlocoIPSubrede] = useState();
    const [nomeSeguranca, setNomeSeguranca] = useState('');
    const [trafegoOrigem, setTrafegoOrigem] = useState();
    const [protocolo, setProtocolo] = useState('');
    const [porta, setPorta] = useState();

    const proximo = () => {
        setPassoAtual((prevState) => prevState + 1);
    }

    const anterior = () => {
        setPassoAtual((prevState) => prevState - 1);
    }

    return (
        <>
            <div className="C_P_container">
                <Header />
                <div className="body">
                    {/* {
                            passos[passoAtual].id === "passo1" && (
                            <> */}
                    <div className="imgProjeto">
                        <img src={RGImg} />
                    </div>
                    <div className="formArea">
                        <div className="titulo">
                            <div className="linha" />
                            <h6>Grupo de Recursos</h6>
                            <div className="linha" />
                        </div>
                        <form method='post'>
                            <label className="label" for="nomeGR">Grupo de Recurso <strong>*</strong></label>
                            <input id="nomeGR" className="input inputText" type="text" placeholder="Nome do Grupo de Recursos" value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} autoFocus required />
                            <label className="label" for="regiao">Região <strong>*</strong></label>
                            <input id="regiao" className="input inputText" list="region" placeholder="Escolha uma Região" value={regiao} onChange={(event) => setRegiao(event.target.value)} />
                            <datalist id="regions">
                                <option value="BR" />
                                <option value="EN" />
                                <option value="PT" />
                                <option value="RU" />
                            </datalist>
                            <input className="btnProxU" type="submit" value="Próximo" />
                        </form>
                    </div>
                    <div className="imgProjeto">
                        <img src={Net1} />
                    </div>
                    <div className="formArea">
                        <div className="titulo">
                            <div className="linha" />
                            <h6>Redes Virtuais</h6>
                            <div className="linha" />
                        </div>
                        <form method='post'>
                            <label className="label" for="selecionaGR">Grupo de Recurso <strong>*</strong></label>
                            <input id="selecionaGR" className="input inputText" list="listaGR" placeholder={{nomeGR} ? {nomeGR} : "Selecionar GR"} value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} />
                            <datalist id="listaGR">
                                <option value="BR" />
                                <option value="EN" />
                                <option value="PT" />
                                <option value="RU" />
                            </datalist>
                            <label className="label" for="nomeRede">Nome da Rede Virtual <strong>*</strong></label>
                            <input id="nomeRede" className="input inputText" type="text" placeholder="Insira o nome da Rede" value={nomeRede} onChange={(event) => setNomeRede(event.target.value)} />
                            <label className="label" for="blocoIP">Bloco de IPs <strong>*</strong></label>
                            <input id="blocoIP" className="input inputText" type="number" placeholder="000.000.000.000/00" value={blocoIP} onChange={(event) => setBlocoIP(event.target.value)} />
                            
                            <div className="titulo" style={{marginTop: 32}}>
                                <div className="linha" />
                                <h6>Subrede</h6>
                                <div className="linha" />
                            </div>
                            <label className="label" for="nomeSubRede">Nome da Subrede</label>
                            <input id="nomeSubRede" className="input inputText" type="text" placeholder="Insira o nome da Subede" value={nomeSubRede} onChange={(event) => setNomeSubRede(event.target.value)} />
                            <label className="label" for="selecionaRede">Anexar à Rede Virtual </label>
                            <input id="selecionaRede" className="input inputText" type="text" placeholder="Insira o nome da Rede" value={nomeRede} onChange={(event) => setNomeRede(event.target.value)} />
                            <label className="label" for="blocoIPSubrede">Bloco de IPs da Subrede</label>
                            <input id="blocoIPSubrede" className="input inputText" type="number" placeholder="000.000.000.000/00" value={blocoIPSubrede} onChange={(event) => setBlocoIPSubrede(event.target.value)} />
                            
                            <div className='botoes'>
                                <input className="btnVoltar" type="submit" value="Voltar" />
                                <input className="btnProx" type="submit" value="Próximo" />
                            </div>
                        </form>
                    </div>
                    <div className="imgProjeto">
                        <img src={securityIcon} />
                    </div>
                    <div className="formArea">
                        <div className="titulo">
                            <div className="linha" />
                            <h6>Grupo de Segurança</h6>
                            <div className="linha" />
                        </div>
                        <form method='post'>
                            <label className="label" for="selecionaGR_GS">Grupo de Recurso <strong>*</strong></label>
                            <input id="selecionaGR_GS" className="input inputText" list="listaGR" placeholder={{nomeGR} ? {nomeGR} : "Selecionar GR"} value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} />
                            <label className="label" for="grupoSeguranca">Nome do Grupo de Segurança <strong>*</strong></label>
                            <input id="grupoSeguranca" className="input inputText" placeholder="Insira o nome do GS" value={nomeSeguranca} onChange={(event) => setNomeSeguranca(event.target.value)} />
                            <label className="label" for="protocolo">Protocolo <strong>*</strong></label>
                            <input id="protocolo" className="input inputText" type="text" placeholder="Protocolo" value={protocolo} onChange={(event) => setProtocolo(event.target.value)} />
                            <label className="label" for="porta">Porta <strong>*</strong></label>
                            <input id="porta" className="input inputText" type="text" placeholder="Insira a Porta" value={porta} onChange={(event) => setPorta(event.target.value)} />
                            <label className="label" for="blocoIPSeguranca">Origem do Tráfego <strong>*</strong></label>
                            <input id="blocoIPSeguranca" className="input inputText" type="number" placeholder="000.000.000.000/00" value={trafegoOrigem} onChange={(event) => setTrafegoOrigem(event.target.value)} />
                            
                            <div className='botoes'>
                                <input className="btnVoltar" type="submit" value="Voltar"  onClick={anterior}/>
                                <input className="btnProx" type="submit" value="Próximo" onClick={proximo} />
                            </div>
                        </form>
                    </div>
                    {/* </>
                            )
                        }
                        {
                            passos[passoAtual].id === "passo2"(
                                
                            )
                        }
                        {
                            passos[passoAtual].id === "passo3"(
                                //
                            )
                        } */}
                </div>
            </div>
        </>
    );
}