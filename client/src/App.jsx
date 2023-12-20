import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
    <body class="main">
      <Bar />
      <h1 > Welcome to our website! You can learn C++ by creating flashcards and looking at our learning material! </h1>
      <img src="/src/assets/coding.jpg"></img>
      </body>
    </>
  )
}


function Bar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Learn C++!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/index.html">Home</Nav.Link>
            <Nav.Link href="/flash.html">Flashcards</Nav.Link>
            <Nav.Link href="/learning.html">Learning</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}


export default App
