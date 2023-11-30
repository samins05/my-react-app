import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const alert = () =>{
    console.log('hi');
  };
  return (
    <>
      <div class='main'>Hello World</div>
      <p class ='text'> apple pie is very yummy</p>
      <img src="/src/assets/boxingcat.gif"></img>
      <p>catch these hands</p>
      <button onClick={alert}>click</button>
    </>
  )
}



export default App
