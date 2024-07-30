import React from 'react';
import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";
import "./login.css";
import { GoogleLogin } from '@react-oauth/google';



const Login = () => {

  const [name, setName] = useState()
  const [email, setemail] = useState()
  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const responseGoogle = (response) => {
    console.log(response);
    const { 
      profileObj: {name, email, imageUrl },
    } = response;
  
    setName(name);
    setemail(email);
    setProfilePic(imageUrl);
    setisLoggedIn(true);
  }
  // const onError = () => {
  //   console.log('Falha ao logar.');
  // };
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados: "+ username + " - " + password);
  }

  return (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <h1>Acesse o sistema</h1>
      <div className="input-field">
        <input 
          type="email" 
          placeholder="E-mail"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FaUser className="icon"/>
      </div>
      <div className="input-field">
        <input 
          type="password" 
          placeholder="Senha "
          onChange={(e) => setPassword(e.target.value)}
        />
        <FaLock className="icon"/>
      </div>

      <div className="recall-forget">
        <label>
          <input type="checkbox" />
          Lembre de mim?
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>
    
      <button>Entrar</button>

      <div className="signup-link">
        <p>
          Não tem uma conta? <a href="#">Registrar</a>
        </p>
      </div>
        
        <div className="button-login-google">
          <GoogleLogin 
            onSuccess={responseGoogle}
            onError={responseGoogle}
            theme="filled_blue"
            size="large"
          >
          </GoogleLogin>
          { isLoggedIn ? 
          <div>   
            <h1>User information</h1>
            <img src={profilePic} alt="Profile" />
            <p>Name: {name}</p>
            <p>Email: {email} </p>
          </div> : '' }
        </div>
        
    </form>
  </div>
  )
}

export default Login