import './App.css';
import React, { useState } from 'react';

function Qus1() {
      const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
        <h2>2•	Refactor the App component to use React hooks instead of a class component.</h2>
     <h1>Count: {count}</h1>
     <button  onClick={incrementCount}>Increment</button> <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Qus1
