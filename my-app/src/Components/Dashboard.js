import React, { useState } from 'react';
import Display from  './Display';
import  './button.css';

function Dashboard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  
  const ballHandle = (e) => {
    e.preventDefault();
    if(balls < 4) {
      setBalls(balls + 1)
    } 
    else {
      setBalls(0)
    }
    // console.log(balls)
  }

  const strikeHandle = (e) => {
    e.preventDefault();
    if(strikes < 3){
      setStrikes(strikes + 1)
    } else {
      setStrikes(0)
    }
    // console.log(strikes)
  }

  const foulHandle = (e) => {
    e.preventDefault();
    if(strikes === 0){
      setStrikes(strikes + 1)
    } else if (strikes === 1) {
      setStrikes(strikes + 2)
    } else {
      setStrikes(strikes)
    }
    // console.log(strikes)
  }

  const hitHandle = (e) => {
    e.preventDefault();
      setBalls(0);
      setStrikes(0);
      // console.log(balls, strikes)
  }


  return (
    <div>
      <Display balls={balls} strikes={strikes}/>
      <button className='button' onClick={strikeHandle}>Strike</button>
      <button className='button' onClick={ballHandle}>Ball</button>
      <button className='button' onClick={foulHandle}>Foul</button>
      <button className='button' onClick={hitHandle}>Hit</button>
    </div>
  );
}

export default Dashboard;
