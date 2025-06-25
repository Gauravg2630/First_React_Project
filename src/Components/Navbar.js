import React from 'react';
import { Navbar, Container, Form, FormControl, Nav, Button } from 'react-bootstrap';
import { Bell, PlusSquare, PersonCircle } from 'react-bootstrap-icons';
import image1 from './insta.JPG';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="px-3 shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={image1} width="40" alt="Instagram" />
        </Navbar.Brand>

        <Form className="d-flex mx-auto" style={{ maxWidth: '300px' }}>
          <FormControl type="search" placeholder="Search" className="me-2" />
        </Form>

        <Nav className="ms-auto d-flex align-items-center gap-3">
          <Button variant="outline-secondary" title="Create">
            <PlusSquare size={20} />
          </Button>
          <Button variant="outline-secondary" title="Notifications">
            <Bell size={20} />
          </Button>
          <Button variant="outline-secondary" title="Profile">
            <PersonCircle size={20} />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
