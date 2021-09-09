// library
import React from 'react';
import styled from 'styled-components';

// bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';

// route
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🐶 Lucky 🐶</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Jumbotron />
    </>
  );
};

const Jumbotron = styled.div`
  width: 100%;
  height: 350px;
  background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/621/2f34602ed32553ee5809a70a1321aefb.jpeg');
  background-size: cover;
  background-position: center;
`;

export default Header;
