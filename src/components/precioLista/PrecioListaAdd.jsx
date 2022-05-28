import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navegacion from "../Navegacion";
import {PrecioListaRest} from './PrecioListaRest';

function PrecioListaAdd(){
    const[precioCompra, setPrecioCompra] = useState("")
    const[precioVenta, setPrecioVenta] = useState("")
    const[fechaRegistro, setFechaRegistro] = useState("")

    const [headerMessage, setHeaderMessage] =useState("")
    const [mensaje, setMensaje] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        PrecioListaRest(precioCompra, precioVenta, fechaRegistro)
        .then((res) => {
                if (res.status == "Ok") {
                    setSuccessMessage(true)
                    setHeaderMessage("Registro Exitoso!")
                    setShow(true);
                }else {
                  setSuccessMessage(false)
                  setMensaje(res.message)
                  setHeaderMessage("Error de Registro")
                    setShow(true); 
                    console.log(res.message);
                }
                })
                .catch((err)=>{
                  setSuccessMessage(false)
                  setMensaje("Problemas " + err)
                  setHeaderMessage("Mensaje de Error")
                  setShow(true);
                })
    
            };
    return(
        <div>
            <Navegacion></Navegacion>
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
                    <Form.Control type="datetime" 
                        placeholder="fechaRegistro"
                        value = {fechaRegistro}
                        onChange = {(e)=> setFechaRegistro(e.target.value)}
                    />
                </Form.Group>
                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-primary" type="submit">
                    Registrar PrecioLista
                </Button>
                </Stack>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{headerMessage}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>{mensaje} </Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant={successMessage? "success": "primary"} onClick={handleClose}>
                            Aceptar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
            </Container>
            <Form>
            </Form>
        </div>
    );
}
export default PrecioListaAdd;