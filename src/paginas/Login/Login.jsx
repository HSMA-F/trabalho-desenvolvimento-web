import React, {useState} from 'react';
import './styles.css';
import Axios from "axios";
import { useNavigate, useHistory } from 'react-router-dom';

export default function Login(){
    const [value, setValues] = React.useState();
    console.log(value)
    
    const handleChangeValues = (value) => {
      setValues((prevValue)=>({
        ...prevValue,
        [value.target.name]: value.target.value
      }))
    }

    const click = async (req, res) => {
        await Axios.post("http://localhost:3333/login", {
          email: value.email,
          senha: value.senha,
        })
        .then(res => {
          if(res.data.length==0){
            alert("Usuário ou senha incorretos/não cadastrados")
          }
          else{
            alert("Login realizado com sucesso")
            window.location.href = "/compra-ingresso"

          }
        }).catch(err => {
          console.log(err)
        }
        )
      }

    return (
        <div className="login">
        <div className="login-form">
            <div className="formulario">
                <form>
                    <div className="form-group">
                      <input type="text"
                        className="email" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="email"
                        name="email" 
                        onChange={handleChangeValues}/>
                    
                    </div>
                    <div className="form-group">
                      <input type="password"
                        className="senha" 
                        id="senha" 
                        placeholder="Senha"
                        name="senha" 
                        onChange={handleChangeValues}/>
                    </div>
                    
                    <button href="http://localhost:3000/cadastro" type="submit" className="btn" onClick={click} > Login</button>
                   
                  </form>
            </div>
        </div>
        <div className="banner-login">
            <h4>Bem vindo ao seu Dashboard<br/></h4>
            <a href='http://localhost:3000/cadastro'>Cadastre-se</a>
        </div>
    </div>

    );
}