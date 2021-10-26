import React from 'react';


function DisplayQuote({ quote }) {
    return (
      quote && (
        <div className='DisplayEmployee'>
          <h1>{quote.character}</h1>
          <img src={quote.image} alt="" />
          <ul>
            <p>{quote.quote}</p>
          </ul>
        </div>
      )
    );
  }
  
  export default DisplayQuote;

