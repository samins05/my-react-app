import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const alert = () =>{
    alert('hi');
  };
  return (
    <>
      <div class='main'>C++ Learning Website</div>
      <p > Welcome to our website! You can learn C++ by creating flashcards and solving practice problems! </p>
      <LoginForm />
      <img src="/src/assets/boxingcat.gif"></img>
      <p>catch these hands</p>
      <a href="flashcards.html">Flashcards</a>
      
    </>
  )
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
