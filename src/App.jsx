import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  const alert = () =>{
    alert('hi');
  };
  return (
    <>
    <body class="main">
      <Bar />
      <signupForm />
      <p > Welcome to our website! You can learn C++ by creating flashcards and solving practice problems! </p>
      <img src="/src/assets/boxingcat.gif"></img>
      <p>catch these hands</p>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#flash">Flashcards</Nav.Link>
            <Nav.Link href="#quiz">Quiz</Nav.Link>
            <Nav.Link href='/login.html'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}
/*
function signupForm(){
  return(
    
    <form>
        <label>Username</label>
        <input type="text" name="uname" required/>
        <br></br>
        <label>Password</label>
        <input type="password" name="pass" required/>
        <br></br>
        <input type="submit" name ="sub"></input>
      </form>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text id="formtext">
          sign up with your email to record your progress!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
*/

export default App
