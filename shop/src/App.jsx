/* eslint-disable */
// library
import React, { useState } from 'react';
import styled from 'styled-components';

// component
import Card from './components/Card';

// bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';

// style
import './App.css';

// data
import Data from './common/Data';

function App() {
  const [place, setPlace] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🐶 Lucky 🐶</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Jumbotron />
      <div className="container">
        <div className="row">
          {place.map((place, i) => {
            return <Card key={i} place={place} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Jumbotron = styled.div`
  width: 100%;
  height: 350px;
  background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/621/2f34602ed32553ee5809a70a1321aefb.jpeg');
  background-size: cover;
  background-position: center;
`;

export default App;
