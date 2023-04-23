import React, { useState } from 'react';
import data from './Data';
import './App.css';


function DataShow() {
    const [nameFilter, setNameFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
  
    function handleNameFilterChange(event) {
      setNameFilter(event.target.value);
    }
  
    function handleAgeFilterChange(event) {
      setAgeFilter(event.target.value);
    }
  
  return (
    <>
    
    <div>
        <h2>•	Create a new data.js file that exports an array of objects, each containing a name and age property. Display the data in a table in the App component.</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>




<div>
<h2>•	Implement filtering for the table. The user should be able to filter the table by name and age using separate input fields.</h2>
<div className='box1'>
<div>
  <label >
    Name:{' '}
    <input type="text" value={nameFilter} onChange={handleNameFilterChange} />
  </label>

</div>
<div>
  <label>
    Age:{' '}
    <input type="text" value={ageFilter} onChange={handleAgeFilterChange} />
  </label>
</div>
</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {data
      .filter(person => {
        if (nameFilter && !person.name.toLowerCase().includes(nameFilter.toLowerCase())) {
          return false;
        }
        if (ageFilter && person.age !== parseInt(ageFilter)) {
          return false;
        }
        return true;
      })
      .map((person, index) => (
        <tr key={index}>
          <td>{person.name}</td>
          <td>{person.age}</td>
        </tr>
      ))}
  </tbody>
</table>
</div>
<br></br>
<br>
</br>
</>


  )
}

export default DataShow
