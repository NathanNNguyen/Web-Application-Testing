import React from 'react';

function Dashboard() {

  const strike = (e) => {
    e.preventDefault();

  }

  const ball = (e) => {
    e.preventDefault();

  }

  const foul = (e) => {
    e.preventDefault();
    
  }
  
  const hit = (e) => {
    e.preventDefault();
    
  }


  return (
    <div>
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
      <button onClick={hit}>Hit</button>
    </div>
  );
}

export default Dashboard;
