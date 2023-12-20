import React from 'react';
import './Learn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';


function Learn(){

  return (
    <body id="main">
        <Bar/>
        <CodingInfo />
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
      </>
    );
  }

function CodingInfo() {
    const helloWorld = `
    #include <iostream>
    using namespace std;
    int main(){
        cout << 'Hello World!';
    }
    `;
    const initVar = `
   // to initialize a variable, write: <variable type> <variable name> = <value>; 
    #include <iostream>
    using namespace std;
    int main(){
        int num =2;
        int secondNum = 5;
        double newNum = 5.30;
        bool isValid = false;
        string greeting = 'Hello!';
    }
    `;
    const conditional = `
    if(<insert condition here>)( // a conditional will include an operator such as !=, ==, >,<
        <insert code here>;
    )
    else if(<insert another condition here>{
        <insert code here>;
    } 
    else{ // if neither of the first two conditions are met
        <insert code here>;
    }
    
    //Let's try it out!
    int main(){
        int a = 3;
        int b = 4;
        if (a>b){ // since a is 3 and b is 4, this will not print "Hey", since a>b is not true 
            cout << "Hey!";
        }else{ // since the first condition wasn't met, the code will print "Bye"
            cout << "Bye!";
        }
    }
    `;
    const forloop = `
    /* if you want a line of code to run a certain amount of times,
    we can use a for loop. First you initialize a variable, and have a condition that must be
    met for the code to run. Then increment i depending on how many times you want it to run.
    for (int i=<any value>;<insert condition here relating to i>;<increment i here>){
        <insert code here>;
    }

    // let's look at this example!
    // we are starting at i=0, and i must be less than 5 for the code to run. After each time the code is ran, add 1 to i.
    for (int i=0;i<5;i++){  
        cout << "Hello World";
    }
    /* the code will continue running until the condition can't be met, so 
    "Hello World" will be printed 5 times. One time at i=0, then i=1, i=2,
    i=3, i=4, and then at i=5 it is not less than 5, so the code cannot run, since 
    5 does not meet the condition of i<5. 
    `;
    const arr=`
    In terms of making lists in C++, you can make an array or a vector.
    
    An array has a locked size of the list
    A vector does not a set size, and the size can be changed.
    
    To initialize an array,
    put:
    <var type> <arrayname>[sizeofArray];
    you can set initialize an array with some set values, or you can set it to default values by not making it equal to anything.
    
    ex. 
    int arr[3] = {1,2,3};

    To initialize a vector,
    put:
    vector <var type(include the carrots here)> <vectorname>;
    
    ex.
    vector<string> list = {"Hi","How","Are","You"};

    to get a given item of a list,
    you will use <list name>[<element number>];

    The first item of any list has an index of 0, the second is 1, and so on.
    for example, if we want to print the "Are" item from the vector list,
    we will do:
    cout << list[2];
    `;
  return (
     <Accordion bg="dark" data-bs-theme="dark" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Hello World Program</Accordion.Header>
        <Accordion.Body>
            <pre> 
                <code>
                    {helloWorld}
                </code>
          </pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Initialize Variables</Accordion.Header>
        <Accordion.Body>
            <pre>
            <code>
                {initVar}
            </code>
        </pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Conditionals</Accordion.Header>
        <Accordion.Body>
            <pre>
            <code>
                {conditional}
            </code>
        </pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>For Loops</Accordion.Header>
        <Accordion.Body>
            <pre>
            <code>
                {forloop}
            </code>
        </pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Lists</Accordion.Header>
        <Accordion.Body>
            <pre>
            <code>
                {arr}
            </code>
        </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}


export default Learn;
