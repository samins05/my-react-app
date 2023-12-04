import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const alert = () =>{
    alert('hi');
  };
  return (
    <>
    <body class="main">
      <Bar />
      <p > Welcome to our website! You can learn C++ by creating flashcards and solving practice problems! </p>
      <LoginForm />
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
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
}


function LoginForm(){
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
  );
}



export default App
