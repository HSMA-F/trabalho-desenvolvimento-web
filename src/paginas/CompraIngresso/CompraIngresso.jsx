import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Axios from "axios";

export default function CompraIngresso(){
    const [eventos, setEventos] = useState([]);
   useEffect(async (req,res) => {
    await Axios.get("http://localhost:3333/eventos",{})
    .then(res => {
        setEventos(res.data);
        console.log(eventos)
    
    }).catch(err => {
      console.log(err)
    }
    )
   }, []);

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
                <div class="conteudo">
                    
                    <div className="box-eventos-passados">
                    
                    <h1> Todos os Eventos</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Compre agora</th>
                            </tr>
                        </thead>
                        <tbody>
                        {eventos.map(evento => (                                
                            <tr>                                    
                                <td>{evento.nome}</td>
                                <td>{evento.preco}</td>                                    
                                <td>{evento.quantidade}</td>
                                <td><button onClick={()=>{
                                    Axios.post("http://localhost:3333/gambiarra",{
                                        nome: evento.nome,
                                        preco: evento.preco,
                                        quantidade: evento.quantidade,
                                    }).then(res=>{
                                        window.location.href = "/pagamento"
                                    })
                                }}>Comprar</button></td>
                            </tr> 
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </main>
        </div>
    );

}
