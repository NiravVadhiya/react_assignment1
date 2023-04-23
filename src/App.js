import './App.css';
import React, { useState } from 'react';
import Qus1 from './Qus1';
import Input from './Input';
import DataShow from './DataShow';
import Next_table from './Next_table';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleClick = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
    setBackgroundColor(randomColor); 
  };

  return (
    <div className="App" style={{backgroundColor}}>
      <h2>1.	Add a new Button component that changes the background color of the page when clicked.</h2>


    <button onClick={handleClick}>Change background color</button>
      <Qus1/>
      <Input/>
      <DataShow/>
      <br></br>
    </div>
    
  );
}

export default App;