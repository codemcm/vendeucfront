import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Navegacion() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Clover Light</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="PrecioListaAdd">Preciolista</Nav.Link>
              <NavDropdown title="Rifa" id="navbarScrollingDropdown">
                <NavDropdown.Item href="">
                  Mostrar Rifa
                </NavDropdown.Item>
                <NavDropdown.Item href="raffleAdd">
                  Agregar Rifa
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="PrizeAdd">Premios</Nav.Link>
              <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="userListV">
                  Mostrar Usuarios
                </NavDropdown.Item>
                <NavDropdown.Item href="userucAdd">
                  Agregar Usuarios
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Ayuda
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
