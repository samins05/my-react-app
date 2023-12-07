import { useState } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    function submit(event){
        event.preventDefault(); //
        axios.post('');
    }

    return( 
            
       <div id="login"> 
        <Form onsubmit={submit}> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/> 
          <Form.Text id="formtext">
            sign up to record your progress!
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
      </div>
    );
  }

export default Login