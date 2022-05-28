import React, { Component }  from 'react';

import {   BrowserRouter,
  Routes,
  Route } from "react-router-dom";
  import PrecioListaAdd from './components/precioLista/PrecioListaAdd'

  import Navegacion from './components/Navegacion';

export default function App() {
  return (
    <div>
    <Routes>
        <Route path='PrecioListaAdd' element = { <PrecioListaAdd/> } />
        
    </Routes>
    </div>
  );
}