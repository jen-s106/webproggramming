import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navigation(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Save the Forests</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Satistics</Nav.Link>
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Charities</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>  
    );
}
export default navigation;