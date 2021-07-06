import React from 'react';

function Display({balls, strikes}) {

  return (
    <div>
      <h2>Balls: {balls}</h2>
      <h2>Strikes: {strikes}</h2>
    </div>
  );
}

export default Display;
