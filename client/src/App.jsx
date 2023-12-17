import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState([])
 useEffect(()=> {
  fetch('http://localhost:8081/login')
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
}, [])

  const alert = () =>{
    alert('hi');
  };
  return (
    <>
    <body class="main">
      <Bar />
      <div style ={{padding: "50px"}}>
    <table>
      <thead>
        <th>Username</th>
        <th>Password</th>
        <th>Progress</th>
      </thead>
      <tbody>
        {data.map((d,i) => (
          <tr key={i}>
            <td>{d.username}</td>
            <td>{d.password}</td>
            <td>{d.progress}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>


  </div>
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


export default App
