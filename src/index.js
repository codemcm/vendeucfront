import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UsuarioAdd from './components/usuario/UsuarioAdd'
import PrecioListaAdd from './components/precioLista/PrecioListaAdd'
import ProductoAdd from './components/producto/ProductoAdd'
import ProductoCatalogoAdd from './components/productoCatalogo/ProductoCatalogoAdd'
import ProveedorAdd from './components/proveedor/ProveedorAdd'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorAdd></ProveedorAdd>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
