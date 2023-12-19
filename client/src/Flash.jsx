import { useState } from 'react';
import './Flash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Flash = () => {
  const cardInfo = [
    {image: "./src/assets/applepie.jpg", title: "Flash1", texts: ["Question 1", "Answer 1"]},
    {image: "./src/assets/applepie.jpg", title: "Flash2", texts: ["Question 2", "Answer 2"]},
    {image: "./src/assets/applepie.jpg", title: "Flash3", texts: ["Question 3", "Answer 3"]},
    {image: "./src/assets/applepie.jpg", title: "Flash4", texts: ["Question 4", "Answer 4"]},
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
        <Button onClick={() => handleClick(index)}>Hello bro</Button>
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
      {cardInfo.map(renderCard)}
      <Button onClick={randomCard}>Next</Button>
      </body>
  );
};

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