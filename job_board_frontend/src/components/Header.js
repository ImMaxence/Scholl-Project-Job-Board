import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const Header = (id) => {
    let navigate = useNavigate();
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">
                        <img id='logo' src="/logoms.png" alt="logo_not_load"
                            width="auto"
                            height="60"
                            className="d-inline-block align-top" />
                    </Navbar.Brand>

                    <Navbar.Brand href="/home">
                        Job Board
                    </Navbar.Brand>

                    <Nav className="me-auto">

                        <Button variant="" type='submit' onClick={(event) => {
                            event.preventDefault()
                            navigate('/home', { state: { id: id.id } });
                        }}>Home</Button>

                        <Button variant="" type='submit' onClick={(event) => {
                            event.preventDefault()
                            navigate('/account', { state: { id: id.id } });
                        }}>Account</Button>

                        <Button variant="" type='submit' onClick={(event) => {
                            event.preventDefault()
                            navigate('/admin', { state: { id: id.id } });
                        }}>Admin</Button>
                    </Nav>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;
