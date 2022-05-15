import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {ProductoRestAdd} from './ProductoRestAdd';

function ProductoAdd(){
   /* atributos que mostrar?
    const[, set] = useState("")
    const[, set] = useState("")
    const[, set] = useState("")*/

    const handleSubmit = (evt) => {
        evt.preventDefault();
        ProductoRestAdd()
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
                    <Form.Label>?</Form.Label>
                    <Form.Control type="text" 
                        placeholder="clave"
                        value = {clave}
                        onChange = {(e)=> setClave(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>?</Form.Label>
                    <Form.Control type="text" 
                        placeholder="nombre"
                        value = {nombre}
                        onChange = {(e)=> setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>?</Form.Label>
                    <Form.Control type="text" 
                        placeholder="descripcion"
                        value = {descripcion}
                        onChange = {(e)=> setDescripcion(e.target.value)}
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
export default ProductoAdd;