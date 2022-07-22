import React from "react";
import Login from "./paginas/Login/Login";
import CadastroUsuario from "./paginas/CadastroUsuario/CadastroUsuario.jsx";
import CadastroEvento from "./paginas/CadastroEvento/CadastroEvento.jsx";
import CompraIngresso from "./paginas/CompraIngresso/CompraIngresso";
import Pagamento from "./paginas/pagamento/Pagamento";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <BrowserRouter>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/cadastro" element={<CadastroUsuario/>}/>
      <Route path="/cadastro-evento" element={<CadastroEvento/>}/>
      <Route path="/compra-ingresso" element={<CompraIngresso/>}/>
      <Route path="/pagamento" element={<Pagamento/>}/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
