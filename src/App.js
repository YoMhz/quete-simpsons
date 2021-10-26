import logo from './logo.svg';
import './QuoteCard.css';
import './QuoteCard.js';
import DisplayQuote from './components/Displaythesimpsonsquote.jsx';
import React from 'react';
import axios from 'axios';
import {useState} from 'react'

const sampleQuote = {

      quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: 'Lisa Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
      characterDirection: 'Right',
      
};

function App() {
  const [quote, setQuote] = useState(sampleQuote);

  const getEmployee = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=5')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div className='App'>
      <DisplayQuote quote={quote}/>
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
