import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Login from "./pages/login/Login"
import CriarProjeto from "./pages/CadastroServicos/criarProjeto";
import ListarProjetos from "./pages/ListagemProjetos/ListarPreojetos"
import CadastroForms from "./pages/CadastroServicos/CadastroServices";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/MeusProjetos" element={<ListarProjetos />}/>
        <Route path="/CadastroServices" element={<CadastroForms />}/>
        <Route path="/CriarProjeto" element={<CriarProjeto />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
