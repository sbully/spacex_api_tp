import React from 'react';
import './Rockets.css';
import { RocketsCards } from '../../components/';

function Rockets() {
  return (
    <div className='rocket'>
      <h1 className='rocket-title'>Rockets</h1>
      <RocketsCards />
    </div>
  );
}

export default Rockets;
