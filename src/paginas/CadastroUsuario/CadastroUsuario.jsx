import React, {useState} from 'react';
import './styles.css';
import Axios from "axios";

export default function CadastroUsuario(){
    const [value, setValues] = React.useState();
    console.log(value)
    
    const handleChangeValues = (value) => {
      setValues((prevValue)=>({
        ...prevValue,
        [value.target.name]: value.target.value
      }))
      console.log(value)
    }

    const click = async (req, res) => {
        await Axios.post("http://localhost:3333/register", {
          nome: value.nome,
          senha: value.senha,
          email: value.email,
          sexo: value.sexo,
          cpf: value.cpf,
          data_nascimento: value.data_nascimento
        })
        .then(
          window.location.href = "/"
        ).catch(err => {
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
                        className="nome" 
                        id="nome" 
                        aria-describedby="nomeHelp" 
                        placeholder="nome"
                        name="nome" 
                        onChange={handleChangeValues}/>
                    
                    </div>
                    <div className="form-group">
                      <input type="text"
                        className="email" 
                        id="email" 
                        placeholder="email"
                        name="email" 
                        onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group">
                      <input type="password"
                        className="senha" 
                        id="senha" 
                        placeholder="senha"
                        name="senha" 
                        onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group">
                      <input type="text"
                        className="cpf" 
                        id="cpf" 
                        placeholder="cpf"
                        name="cpf" 
                        onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group">
                      <input type="text"
                        className="data_nascimento" 
                        id="data_nascimento" 
                        placeholder="data_nascimento"
                        name="data_nascimento" 
                        onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group">
                      <input type="text"
                        className="sexo" 
                        id="sexo" 
                        placeholder="sexo"
                        name="sexo" 
                        onChange={handleChangeValues}/>
                    </div>
                    <button type="submit" className="btn" onClick={click} > Cadastrar</button>
                   
                  </form>
            </div>
        </div>
        <div className="banner-login">
            <h4>Bem vindo ao seu Dashboard</h4>
            <h4>Já tem cadastro?</h4>
            <h4>Faça seu <a href='/'>login</a></h4>
        </div>
    </div>

    );
}