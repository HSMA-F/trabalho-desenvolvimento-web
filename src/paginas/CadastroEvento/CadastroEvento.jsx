import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link} from 'react-router-dom'; 
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css';  
export default function Dashboard(){
    
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
        await Axios.post("http://localhost:3333/registerevento", {
          nome: value.nome,
          quantidade: parseInt(value.quantidade,10),
          preco: parseInt(value.preco,10)
        })
        .then(res => {
          alert(res)
        }).catch(err => {
          console.log(err)
        }
        )
      }
    
    return (
        <div className="dashboard">
            <div className='sidebar'>
                <div className="sidebar-logo">
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/cadastro-evento">  Cadastrar Evento </Link>
                        </li>
                        <li>
                            <Link to="/compra-ingresso">  Compra Ingresso </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <main>
                <div className="conteudo">
                    <div className="box">
                        <h1> Cadastrando seu evento</h1>
                        <p>Prencha as informações do seu evento.</p>
                         <form>
                            <div className="input-grupo">
                                <input type="text" 
                                    placeholder="Nome do Evento" 
                                    name="nome" 
                                    className="nomeIngresso"
                                    onChange={handleChangeValues}/>
                                <input type="number" 
                                    placeholder="Quantidade de ingressos" 
                                    name="quantidade" 
                                    className="qtd" 
                                    onChange={handleChangeValues}/>
                                <input type="number" 
                                    placeholder="Preço R$" 
                                    name="preco" 
                                    className="preco" 
                                    onChange={handleChangeValues}/>
                            </div>
                                <button type="submit" className="btn" onClick={click}>Cadastrar Evento</button>
                        </form>                         
                    </div>      
                </div>
            </main>
        </div>




    );

}