import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {PrecioListaRestAdd} from './PrecioListaRestAdd';

function PrecioListaAdd(){
    const[precioCompra, setPrecioCompra] = useState("")
    const[precioVenta, setPrecioVenta] = useState("")
    const[fechaRegistro, setFechaRegistro] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        PrecioListaRestAdd(precioCompra, precioVenta, fechaRegistro)
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
                    <Form.Label>Precio de Compra</Form.Label>
                    <Form.Control type="text" 
                        placeholder="precioCompra"
                        value = {precioCompra}
                        onChange = {(e)=> setPrecioCompra(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio de Venta</Form.Label>
                    <Form.Control type="text" 
                        placeholder="precioVenta"
                        value = {precioVenta}
                        onChange = {(e)=> setPrecioVenta(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha de Registro</Form.Label>
                    <Form.Control type="Datetime" 
                        placeholder="fechaRegistro"
                        value = {fechaRegistro}
                        onChange = {(e)=> setFechaRegistro(e.target.value)}
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
export default PrecioListaAdd;