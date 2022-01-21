import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' className='navbar-dark'>
      <Container>
        <Navbar.Brand className='' href='#home'>
          Online Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>
              <FaShoppingCart className='me-1' /> Cart
            </Nav.Link>
            <Nav.Link href='#link'>
              <BsPersonFill className='me-1' />
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
