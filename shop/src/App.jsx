/* eslint-disable */
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';

function App() {
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
          <div className="col-md-4">
            <img
              src="https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2RB/image/p4r9UUNR9IFdXvLWEqr-n1m3R0g.png"
              width="100%"
            />
            <h4>장소명</h4>
            <p>장소 설명 & 위치</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2RB/image/p4r9UUNR9IFdXvLWEqr-n1m3R0g.png"
              width="100%"
            />
            <h4>장소명</h4>
            <p>장소 설명 & 위치</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2RB/image/p4r9UUNR9IFdXvLWEqr-n1m3R0g.png"
              width="100%"
            />
            <h4>장소명</h4>
            <p>장소 설명 & 위치</p>
          </div>
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
