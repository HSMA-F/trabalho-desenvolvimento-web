import React from "react";
import img from "../../imagens/cadeiras.png"
import "./styles.css";
import Axios from "axios";
export default function Pagamento() {
    const [eventos, setEventos] = React.useState();
    const [value, setValues] = React.useState();
    console.log(value)
    
    React.useEffect(async (req,res) => {
        await Axios.get("http://localhost:3333/gambiarra2",{})
        .then(res => {
            setEventos(res.data[0]);
            // alert("Compra referente ao evento"+ evento.nome);
            // alert("Numero de ingressos: "+ evento.quantidade);
            // alert("Valor do ingresso: "+ evento.preco+ " Meia: "+evento.preco/2);
        }).catch(err => {
          console.log(err)
        }
        )
       }, []);

       async function click( req,res){
        let poltrona = value.coluna+value.numero;
        await Axios.post("http://localhost:3333/pagamento2", {
          nome: eventos.nome,
          quantidade: eventos.quantidade-1,
          poltrona: poltrona,
        })
        .then(res => {
          alert("Compra realizada com sucesso")
          //window.location.href = "/dashbosssard"
        }).catch(err => {
          console.log(err)
        }
        )
      }

    const handleChangeValues = (value) => {
      setValues((prevValue)=>({
        ...prevValue,
        [value.target.name]: value.target.value
      }))
    }
    return(
        <div className="body">
            <img src={img} alt="Cadeiras" />
            <label >Escolha a coluna e o numero de sua poltrona</label>
            <select name="coluna"  onChange={handleChangeValues}>
                <option value="NULL">-</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="g">G</option>
                <option value="h">H</option>
                <option value="i">I</option>
                <option value="j">J</option>
                <option value="k">K</option>
                <option value="l">L</option>
            </select>
            <select name="numero"  onChange={handleChangeValues}>
                <option value="NULL">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
            <div className="meia">
            <labe>Selecione se for meia:</labe>
            <input type="checkbox"></input>
            </div>
            <button onClick={click}>OK</button>
        </div>
    )
}