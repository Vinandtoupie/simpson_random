import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [change, setChange] = useState('')
  useEffect(() => {
    simpsons()
  }, [])

  const simpsons = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')

      .then((response) => setChange(response.data[0]))


  };

  console.log(change)
  return (
    <div className="App">
      <button onClick={simpsons} >Citation Random</button>>
      <p>name : {change.character}</p>
      <img src={change.image} alt="pics" />
      <p>{change.quote}</p>



    </div>
  );
}

export default App;
