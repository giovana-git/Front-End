// import banner from "./pages/login/img/banner_login2.svg";
import './css/style.css'
import { useEffect, useState } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
function Login() {

  const [Email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')
  const [Louding, stLouding] = useState(false)

  const [Animaition, setAnimaition] = useState(false);

  
  // const container = document.querySelector(".container");


  const addClass = () => {
    setAnimaition(true)
    // container.classList.add("sign-up-mode");
  };
  const removeClass = () => {
    setAnimaition(false)
    // container.classList.remove("sign-up-mode");
  };

  
  return (
    <>
      <div className= {Animaition ? 'container sign-up-mode': 'container '  }   >
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Logar</h2>
              <div className="input-field ">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" value={Email} onChange={(evt) => setEmail(evt.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Senha" value={Senha} onChange={(evt) => setSenha(evt.target.value)} />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Cadastrar-se</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">
                Ou inscreva-se em plataformas sociais
              </p>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Novo aqui ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button onClick={addClass} className='btn transparent' id="sign-up-btn">
                Inscreva-se
              </button>
              <img src='{banner} ' className="image" alt="" />
            </div>
            <img src="" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <img src="img/logo_black.svg" alt="" />
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button onClick={removeClass} className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img
              src="img/undraw_cloud_files_wmo8.svg"
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
