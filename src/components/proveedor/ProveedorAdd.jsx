import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container";
import {ProveedorRest} from './ProveedorRest';

function ProveedorAdd(){
    const[nombreEmpresa, setNombreEmpresa] = useState("")
    const[direccion, setDireccion] = useState("")
    const[telefono, setTelefono] = useState("")
    const[celular, setCelular] = useState("")

    const [headerMessage, setHeaderMessage] =useState("")
    const [mensaje, setMensaje] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        ProveedorRest(nombreEmpresa, direccion, telefono, celular)
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
                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-primary" type="submit">
                    Registrar Proveedor
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
export default ProveedorAdd;