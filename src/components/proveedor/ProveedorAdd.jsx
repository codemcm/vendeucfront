import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {ProveedorRestAdd} from './ProveedorRestAdd';

function ProveedorAdd(){
    const[nombreEmpresa, setNombreEmpresa] = useState("")
    const[direccion, setDireccion] = useState("")
    const[telefono, setTelefono] = useState("")
    const[celular, setCelular] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        ProveedorRestAdd(nombreEmpresa, direccion, telefono, celular)
        .then((res) => {
            if (res.status == "Ok") {
              alert(`Registro exitoso ${res.body}`);
            } else {
              console.log(res.message);
            }
          });
      };

    return(
        <div>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de la Empresa</Form.Label>
                    <Form.Control type="text" 
                        placeholder="nombreEmpresa"
                        value = {nombreEmpresa}
                        onChange = {(e)=> setNombreEmpresa(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" 
                        placeholder="direccion"
                        value = {direccion}
                        onChange = {(e)=> setDireccion(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>telefono</Form.Label>
                    <Form.Control type="text" 
                        placeholder="telefono"
                        value = {telefono}
                        onChange = {(e)=> setTelefono(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" 
                        placeholder="celular"
                        value = {celular}
                        onChange = {(e)=> setCelular(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
                </Form.Group>
                
            </Form>
            </Container>
            <Form>
            </Form>
        </div>
    );
}
export default ProveedorAdd;