import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container";
import {ProductoRest} from './ProductoRest';

function ProductoAdd(){
    const[productoCatalogoId, setProductoCatalogoId] = useState("")
    const[proveedorId, setProveedorId] = useState("")
    const[precioListaId, setPrecioListaId] = useState("")

    const [headerMessage, setHeaderMessage] =useState("")
    const [mensaje, setMensaje] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (evt) => {
        evt.preventDefault(productoCatalogoId, proveedorId, precioListaId);
        ProductoRest()
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
                      <Form.Label>productoCatalogoId</Form.Label>
                      <Form.Control type="text" 
                          placeholder="ProductoCatalogoId"
                          value={productoCatalogoId}
                          onChange={(e) => setProductoCatalogoId(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label>proveedorId</Form.Label>
                      <Form.Control type="text" 
                          placeholder="proveedorId"
                          value={proveedorId}
                          onChange={(e) => setProveedorId(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label>precioListaId</Form.Label>
                      <Form.Control type="text" 
                          placeholder="precioListaId"
                          value={precioListaId}
                          onChange={(e) => setPrecioListaId(e.target.value)} />
                  </Form.Group>

                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-primary" type="submit">
                    Registrar Producto
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
export default ProductoAdd;