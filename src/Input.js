import { useState } from 'react';
import './App.css';

function Input() {

    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
      setInputValue(event.target.value);
    }
  return (
    <>

    <h2>•	Add a new Input component that accepts a user input and displays the value below the input field.</h2>
 <div>
      <label htmlFor="inputField">Enter your text:</label>
      <br></br>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
      />
      <div className='ans'>{inputValue}</div>
    </div>


</>
  )
}

export default Input;
