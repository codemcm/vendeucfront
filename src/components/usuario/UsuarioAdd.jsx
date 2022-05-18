import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack"
import { UsuarioRestAdd } from "./UsuarioRest";

function UsuarioAdd(){
    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const [headerMessage, setHeaderMessage] =useState("")
    const [mensaje, setMensaje] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        UsuarioRestAdd(usuario, contrasenia)
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
                    <Form.Label>Nombre del Usuario</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} />
                </Form.Group>
                
                <Form.Group className="mb-3" >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Contraseña" 
                            value={contrasenia}
                            onChange={(e) => setContrasenia(e.target.value)}/>
                    </Form.Group>
                
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="outline-primary" type="submit">
                        Registrar Usuario
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
        </div>
    );
}
export default UsuarioAdd;