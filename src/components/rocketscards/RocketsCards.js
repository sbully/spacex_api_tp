import React, { useState, useEffect } from 'react';
import './RocketsCards.css';
import { RocketItem } from '../';

function RocketsCards() {
  const [rocketsList, setRocketsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRocketsList(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul className='rocket-container'>
        {rocketsList.map((rocket) => (
          <RocketItem rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}

export default RocketsCards;
