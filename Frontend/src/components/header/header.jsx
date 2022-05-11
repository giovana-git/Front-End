import React from 'react'
// import { Link } from 'react-router-dom'
import Logout from '../../assets/img/Exit_Img.svg'
import Profile from '../../assets/img/User_Img.svg'
import Logo from '../../assets/img/cloud_Main.svg'
import '../../assets/css/components/header.css'



export default function Header() {

    return (
        <div>
            <header className="M_P_Header">
                <div className="M_P_Left">
                    <img src={Logo} alt="" />
                </div>
                <div className="M_P_Right">
                    {/* <Link to="/perfil"> */}
                        <img src={Profile} alt="" />
                    {/* </Link>
                    <Link to="/"> */}
                        <img src={Logout} alt="" />
                    {/* </Link> */}
                </div>
            </header>
        </div>
    );
}