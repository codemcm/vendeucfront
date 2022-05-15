import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {UsuarioRestAdd} from './UsuarioRestAdd';

function UsuarioAdd(){

    const [usuario, setUsuario] = useState("")
    const [contrasenia, setContrasenia] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("usuario es: " + usuario)
        UsuarioRestAdd(usuario, contrasenia)
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
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Nombre del usuario"
                        value = {usuario}
                        onChange = {(e)=> setUsuario(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Contraseña"
                        value = {contrasenia}
                        onChange = {(e)=> setContrasenia(e.target.value)}
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
export default UsuarioAdd;