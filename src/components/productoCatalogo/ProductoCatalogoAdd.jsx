import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container";
import {ProductoCatalogoRest} from './ProductoCatalogoRest';

function ProductoCatalogoAdd(){
    const[clave, setClave] = useState("")
    const[nombre, setNombre] = useState("")
    const[descripcion, setDescripcion] = useState("")

    const [headerMessage, setHeaderMessage] =useState("")
    const [mensaje, setMensaje] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        ProductoCatalogoRest(clave, nombre, descripcion)
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
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Clave</Form.Label>
                    <Form.Control type="text" 
                        placeholder="clave"
                        value = {clave}
                        onChange = {(e)=> setClave(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control type="text" 
                        placeholder="nombre"
                        value = {nombre}
                        onChange = {(e)=> setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion del Producto</Form.Label>
                    <Form.Control type="text" 
                        placeholder="descripcion"
                        value = {descripcion}
                        onChange = {(e)=> setDescripcion(e.target.value)}
                    />
                </Form.Group>
                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-primary" type="submit">
                    Registrar Producto en Catalogo
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
export default ProductoCatalogoAdd;