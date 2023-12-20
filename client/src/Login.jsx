import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Login() {
    return (   
      <body id="bod"> 
        <Bar />
       <div id="login"> 
        <Form> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/> 
          <Form.Text id="formtext">
            sign up to record your progress!
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </body>
    );
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
              <Nav.Link href='/login.html'>Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br></br>
      </>
    );
  }
export default Login
