import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Button, Form } from 'react-bootstrap';
import logo from './logo1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TESTPAGE extends Component 
{
    render() {
        return (
            <Navbar className="mr-auto" collapseOnSelect expand="md" bd="dark" variant="dark"> 
            {/* /*эти свойства делают бар адаптивным */ }
                <Container > 
                    {/* /* контейнер чтобы отцентрировать меню */ }
                    <Navbar.Brand href="/">
                        <img 
                            src={logo}
                            height="100"
                            width="100"
                            className="App-logo"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/logon">Auth</Nav.Link>
                            <Nav.Link href="/register">Registr</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}