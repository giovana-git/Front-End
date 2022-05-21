// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
// Componentes
import Header from '../../components/header/header'
//css
import '../../assets/css/pages/criarProjeto.css'

//imgs
import iconVM from '../../assets/img/computer-solid.svg'
import RGImg from '../../assets/img/resource-group-img.svg'
// import VM from '../../assets/img/vm-scale-set.svg'
import iconNet from '../../assets/img/wifi.svg'
import Net1 from '../../assets/img/image28.svg'
import Net2 from '../../assets/img/router-xxl.svg'
import iconScript from '../../assets/img/scriptIcon.svg'
import securityIcon from '../../assets/img/security-group-img.svg'
import VM from '../../assets/img/virtual-machine-img.svg'


export default function CriarRecurso() {
    // const [passoAtual, setPassoAtual] = useState(0);
    const [nomeGR, setNomeGR] = useState('');
    const [regiao, setRegiao] = useState('East US');
    const [nomeRede, setNomeRede] = useState('');
    const [blocoIP, setBlocoIP] = useState('');
    const [nomeSubRede, setNomeSubRede] = useState('');
    const [blocoIPSubrede, setBlocoIPSubrede] = useState('');
    const [nomeSeguranca, setNomeSeguranca] = useState('');
    const [trafegoOrigem, setTrafegoOrigem] = useState('0.0.0.0/0');
    const [protocolo, setProtocolo] = useState('');
    const [porta, setPorta] = useState('');
    const [username, setUsername] = useState('Carlos');
    const [project_name, setNomeprojeto] = useState('teste');
    const [prioridade, setPrioridade] = useState('');
    const [nomeVM, setNomeVM] = useState('');
    const [tamanhoVM, setTamanhoVM] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [hostname, setHostname] = useState('');
    const [user_name, setUser_name] = useState('');


    // "MicrosoftWindowsServer",
    //   "WindowsServer",
    //   "2016-Datacenter",
    //   "latest"


    //RESOURCE GRUP
    function cadastrarRGroup(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/resource_group/", {
            rg: {
                name: nomeGR,
                location: regiao
            },
            project: {
                username: username,
                project_name: project_name
            }

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    // return({ message: 'Projeto criado com sucesso!' });
                    console.log('rg cadastrado');
                    setNomeGR('');
                    setRegiao('');
                    setUsername('');
                    setNomeprojeto('');
                }
            }).catch(erro => console.log(erro))
    }

    //VIRTUAL NETWORK
    function cadastrarVnet(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/virtual_network/", {

            vnet: {
                name: nomeRede,
                rg: nomeGR,
                cidr_block: blocoIP,
            },
            project: {
                username: username,
                project_name: project_name
            }
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('vnet cadastrada');
                    setNomeRede('');
                    setNomeGR('');
                    setUsername('');
                    setNomeprojeto('');
                    setBlocoIP('');
                }
            }).catch(erro => console.log(erro))
    }


    //SUBNET
    function cadastrarSubrede(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/subnet/", {

            subnet: {
                name: nomeSubRede,
                vnet: nomeRede,
                cidrblock: blocoIPSubrede,
                resource_group: nomeGR
            },

            project: {
                username: username,
                project_name: project_name
            }
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log("SUBNET cadastrada");
                    setNomeGR('');
                    setNomeRede('');
                    setNomeSubRede('');
                    setUsername('');
                    setNomeprojeto('');
                    setBlocoIPSubrede('');
                }
            }).catch(erro => console.log(erro))
    }


    //GRUPO DE SEGURANÇA
    function cadastrarGrupoSeguranca(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/security_group/", {

            sg: {
                name: nomeSeguranca,
                rg: nomeGR,
                // rule_name: "PermitInboundWEBandSSH",
                rule_priority_list: prioridade,
                rule_dest_port_range_list: porta,
                // rule_direction: "Inbound",
                // rule_access: "Allow",
                rule_protocol: protocolo,
                // rule_source_port_range: "*",
                rule_source_address_prefix: trafegoOrigem,
                // rule_dest_address_prefix: "*"
            },
            project: {
                username: username,
                project_name: project_name
            }

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('security group cadastrado');
                    setNomeSeguranca('');
                    setNomeGR('');
                    setPrioridade('');
                    setPorta('');
                    setProtocolo('');
                    setTrafegoOrigem('');
                    setUsername('');
                    setNomeprojeto('');



                }
            }).catch(erro => console.log(erro))
    }


    //VIRTUAL MACHINE
    function cadastrarVirtualMachineWindows(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/windows_virtual_machine/", {

            vm: {
                name: nomeVM,
                rg: nomeGR,
                nsg: nomeSeguranca,
                subnet: nomeSubRede,
                size: tamanhoVM,
                username: username,
                password: senha,
                hostname: hostname
            },
            project: {
                username: username,
                project_name: project_name
            }

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('VM cadastrada');
                    setNomeVM('');
                    setNomeGR('');
                    setNomeSeguranca('');
                    setNomeSubRede('');
                    setTamanhoVM('');
                    setUser_name('');
                    setHostname('');
                    setUsername('');
                    setNomeprojeto('');
                }
            }).catch(erro => console.log(erro))
    }

    function Apply(evento) {
        evento.preventDefault();
        axios.post("http://35.174.249.35:8000/api/apply/", {
            username: username,
            project_name: project_name
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('apply feita com sucesso');
                    setUsername('');
                    setNomeprojeto('');
                }
            }).catch(erro => console.log(erro))
    }
    function DeletarProjeto(evento) {
        evento.preventDefault();
        axios.delete("http://35.174.249.35:8000/api/destroy/"+ username + "/" + project_name + "/",
            // {
            //     username: username,
            //     project_name: project_name   
            // }, 
            {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('projeto deletado');
                    setUsername('');
                    setNomeprojeto('');
                }
            }).catch(erro => console.log(erro))
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
                        <form method='post' onSubmit={cadastrarRGroup}>
                            <label className="label" for="nomeGR">Grupo de Recurso <strong>*</strong></label>
                            <input id="nomeGR" className="input inputText" type="text" placeholder="Nome do Grupo de Recursos" value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} autoFocus required />
                            <label className="label" for="regiao">Região <strong>*</strong></label>
                            <input id="regiao" className="input inputText" list="region" placeholder="Escolha uma Região" value={regiao} onChange={(event) => setRegiao(event.target.value)} />
                            <datalist id="regions">
                                <option value={nomeGR} />
                            </datalist>
                            <input className="btnProxU" type="submit" value="Cadastrar" onClick={cadastrarRGroup} />
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
                            <input id="selecionaGR" className="input inputText" list="listaGR" placeholder="Nome do Grupo de Recursos"
                                // placeholder={{ nomeGR } ? { nomeGR } : "Selecionar GR"} 
                                value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} />
                            <datalist id="listaGR">
                                <option value={nomeGR} />
                            </datalist>
                            <label className="label" for="nomeRede">Nome da Rede Virtual <strong>*</strong></label>
                            <input id="nomeRede" className="input inputText" type="text" placeholder="Insira o nome da Rede" value={nomeRede} onChange={(event) => setNomeRede(event.target.value)} />
                            <label className="label" for="blocoIP">Bloco de IPs <strong>*</strong></label>
                            <input id="blocoIP" className="input inputText" list="blocosIp" type="text" placeholder="000.000.000.000/00" value={blocoIP} onChange={(event) => setBlocoIP(event.target.value)} />
                            <datalist id="blocosIp">
                                <option value="192.168.0.0/16" />
                                <option value="172.16.0.0/16" />
                                <option value="10.0.0.0/8" />
                            </datalist>

                            <div className='botoes'>
                                {/* <input className="btnVoltar" type="submit" value="Voltar" onClick={anterior} /> */}
                                <input className="btnProx" type="submit" value="Cadastrar" onClick={cadastrarVnet} />
                            </div>

                            <div className="titulo" style={{ marginTop: 32 }}>
                                <div className="linha" />
                                <h6>Subrede</h6>
                                <div className="linha" />
                            </div>
                            <label className="label" for="nomeSubRede">Nome da Subrede</label>
                            <input id="nomeSubRede" className="input inputText" type="text" placeholder="Insira o nome da Subede" value={nomeSubRede} onChange={(event) => setNomeSubRede(event.target.value)} />
                            <label className="label" for="selecionaRede">Anexar à Rede Virtual </label>
                            <input id="selecionaRede" className="input inputText" type="text" placeholder="Insira o nome da Rede" value={nomeRede} onChange={(event) => setNomeRede(event.target.value)} />
                            <label className="label" for="blocoIPSubrede">Bloco de IPs da Subrede</label>
                            <input id="blocoIPSubrede" className="input inputText" list="blocosIpsub" type="text" placeholder="000.000.000.000/00" value={blocoIPSubrede} onChange={(event) => setBlocoIPSubrede(event.target.value)} />
                            <datalist id="blocosIpsub">
                                <option value="192.168.0.0/24" />
                                <option value="172.16.0.0/24" />
                                <option value="10.0.0.0/24" />
                            </datalist>

                            <div className='botoes'>
                                {/* <input className="btnVoltar" type="submit" value="Voltar" onClick={anterior} /> */}
                                <input className="btnProx" type="submit" value="Cadastrar" onClick={cadastrarSubrede} />
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
                            <input id="selecionaGR_GS" className="input inputText" list="listaGR" placeholder="Nome do Grupo de Recursos" value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} />
                            <label className="label" for="grupoSeguranca">Nome do Grupo de Segurança <strong>*</strong></label>
                            <input id="grupoSeguranca" className="input inputText" placeholder="Insira o nome do GS" value={nomeSeguranca} onChange={(event) => setNomeSeguranca(event.target.value)} />
                            <label className="label" for="protocolo">Protocolo <strong>*</strong></label>
                            <input id="protocolo" className="input inputText" list='protocoloList' type="text" placeholder="Protocolo" value={protocolo} onChange={(event) => setProtocolo(event.target.value)} />
                            <datalist id="protocoloList">
                                <option value="TCP" />
                                <option value="UDP" />
                            </datalist>
                            <label className="label" for="porta">Porta <strong>*</strong></label>
                            <input id="porta" className="input inputText" type="text" list="portasList" placeholder="Insira a Porta" value={porta} onChange={(event) => setPorta(event.target.value)} />
                            <datalist id="portasList">
                                <option value='22' />
                                <option value='80' />
                                <option value='3309' />
                                <option value='443' />
                            </datalist>
                            <label className="label" for="prioridade">Prioridade<strong>*</strong></label>
                            <input id="prioridade" className="input inputText" type="text" list="prioridadeList" placeholder="Informe a Prioridade" value={prioridade} onChange={(event) => setPrioridade(event.target.value)} />
                            <datalist id="prioridadeList">
                                <option value='100' />
                                <option value='110' />
                                <option value='120' />
                            </datalist>
                            <label className="label" for="blocoIPSeguranca">Origem do Tráfego <strong>*</strong></label>
                            <input id="blocoIPSeguranca" className="input inputText" type="text" placeholder="000.000.000.000/00" value={trafegoOrigem} onChange={(event) => setTrafegoOrigem(event.target.value)} />

                            <div className='botoes'>
                                {/* <input className="btnVoltar" type="submit" value="Voltar" onClick={anterior} /> */}
                                <input className="btnProx" type="submit" value="Cadastrar" onClick={cadastrarGrupoSeguranca} />
                            </div>
                        </form>
                    </div>
                    <div className="imgProjeto">
                        <img src={VM} />
                    </div>
                    <div className="formArea">
                        <div className="titulo">
                            <div className="linha" />
                            <h6>Virtual Machine</h6>
                            <div className="linha" />
                        </div>
                        <form method='post'>
                            <label className="label" for="selecionaGR_VM">Grupo de Recurso <strong>*</strong></label>
                            <input id="selecionaGR_VM" className="input inputText" list="listaGR" placeholder="Nome do Grupo de Recursos" value={nomeGR} onChange={(event) => setNomeGR(event.target.value)} />
                            <label className="label" for="selecionaGS_VM">Grupo de Segurança <strong>*</strong></label>
                            <input id="selecionaGS_VM" className="input inputText" list="listaGS" placeholder="Insira o nome do GS" value={nomeSeguranca} onChange={(event) => setNomeSeguranca(event.target.value)} />
                            <label className="label" for="nomeSubRede">Nome da Subrede</label>
                            <input id="nomeSubRede" className="input inputText" type="text" placeholder="Insira o nome da Subede" value={nomeSubRede} onChange={(event) => setNomeSubRede(event.target.value)} />
                            <label className="label" for="nomeVM">Nome da Máquina Virtual <strong>*</strong></label>
                            <input id="nomeVM" className="input inputText" placeholder="Insira o nome da VM" value={nomeVM} onChange={(event) => setNomeVM(event.target.value)} />
                            <label className="label" for="tamanhoVM">Tamanho da VM</label>
                            <input id="tamanhoVM" className="input inputText" type="text" list="sizeList" placeholder="Escolha o tamanho da VM" value={tamanhoVM} onChange={(event) => setTamanhoVM(event.target.value)} />
                            <datalist id="sizeList">
                                <option value="Standard_DS1_v2" />
                                <option value="Standard_D2s_v3" />
                                <option value="Standard_D4s_v3" />
                                <option value="Standard_E2s_v3" />
                            </datalist>
                            <label className="label" for="userName">Nome do Usuário</label>
                            <input id="userName" className="input inputText" type="text" placeholder="Insira o nome do Usuário" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
                            <label className="label" for="senha">Senha do Usuário</label>
                            <input id="senha" className="input inputText" type="password" placeholder="Insira a Senha do Usuário" value={senha} onChange={(event) => setSenha(event.target.value)} />
                            <label className="label" for="hostname">Hostname</label>
                            <input id="hostname" className="input inputText" type="text" placeholder="Insira o Hostname da VM" value={hostname} onChange={(event) => setHostname(event.target.value)} />

                            <div className='botoes'>
                                {/* <input className="btnVoltar" type="submit" value="Voltar" /> */}
                                <input className="btnProx" type="submit" value="Cadastrar" onClick={cadastrarVirtualMachineWindows} />
                            </div>
                        </form>
                    </div>
                    <div className='div_apply'>
                        <div>
                            <input className="btnProxU" type="submit" value="Apply" onClick={Apply} />
                            <input className="btnProxUX" type="submit" value="Deletar" onClick={DeletarProjeto}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}