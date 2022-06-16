import React from "react";
import { loginurl } from "./Authentication";
import logo1 from './darkkicon.png'

const Login = () =>{
    return(
        <div className="login">
            <img src={logo1} alt="" />
            <h1>Spotify</h1>
            <a href={loginurl}>Login with spotify</a>
        </div>
    );
    }
export default Login;