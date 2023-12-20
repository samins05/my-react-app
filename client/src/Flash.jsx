import { useState } from 'react';
import './Flash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Flash = () => {
  const cardInfo = [
    {image: "./src/assets/hello world.png", title: "Hello World", texts: ["How do you print Hello World in C++?", "cout << 'Hello World';"]},
    {image: "./src/assets/forloop.png", title: "For Loop", texts: ["How do you code a for loop that goes to 10 in C++?", "for(int i=0;i<10;i++){body}"]},
    {image: "./src/assets/math.jfif", title: "Integers", texts: ["What does 5*2/3 output in C++?", "3"]},
    {image: "./src/assets/theEnd.jfif", title: "End a Program", texts: ["How do you end a program after it runs in C++?", "return 0;"]},
    {image: "./src/assets/array.png", title: "Arrays", texts: ["How can you initialize an array of integers that have values 1,2, and 5?","int arr[3]={1,2,5};"
    ]},
    {image: "./src/assets/string.jpg", title:"Initializing Variable", texts:["How would you initialize a string variable named hi to have the value 'Hello'?","string hi = 'Hello';"]}
  ];
  
  const [currentIndex, setIndex] = useState(0);
  const [cardTexts, setTexts] = useState(cardInfo.map(card => card.texts[0]));
  
  const renderCard = (card, index) => {
    return(
      <Card style={{ width: '18rem', display: index === currentIndex ? 'block' : 'none' }} key={index}>
      <Card.Img variant="top" width="286" height="170" src={card.image}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{cardTexts[index]}</Card.Text>
        <Button onClick={() => handleClick(index)}>Show Answer</Button>
      </Card.Body>
    </Card>
    );
  };

  const handleClick = (cardIndex) => { 
    setTexts(prevTexts => {
      const newTexts = [...prevTexts];
      newTexts[cardIndex] = newTexts[cardIndex] === cardInfo[cardIndex].texts[0] ? cardInfo[cardIndex].texts[1] : cardInfo[cardIndex].texts[0]
      return newTexts;
    });
  };

  const randomCard = () => {
    setIndex((prevIndex) => (Math.round((Math.random() * 100)) % cardInfo.length));
    //console.log(Math.round((Math.random() * 100)) % cardInfo.length);
  };

  return (
    <body className = "main">
      <Bar />
      {cardInfo.map(renderCard)}
      
      <Button onClick={randomCard}>Next</Button>
      </body>
  );
};


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


export default Flash;

/*
 <body class="main">
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" width="286" height="180" src="./src/assets/applepie.jpg"/>
      <Card.Body>
        <Card.Title>Apple Pie</Card.Title>
        <Card.Text>
          C++ Study Term
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Click to flip</Button>
      </Card.Body>
    </Card>
    </body>
    */
