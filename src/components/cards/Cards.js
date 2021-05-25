import React, { useState, useEffect } from 'react';
import { CardItem } from '../';
import './Cards.css';

function Cards() {
  const [incomingMissions, setMissionIncomming] = useState();
  const [rockets, setRocket] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const upcomingRequest = fetch(
      'https://api.spacexdata.com/v4/launches/upcoming'
    )
      .then((response) => response.json())
      .then((result) => {
        setMissionIncomming(result);
      })
      .catch((err) => {
        setErrorMessage('Upcoming request error');
      });
    const rocketRequest = fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json())
      .then((result) => {
        setRocket(result);
      });
    /*       .catch((err) => {
        return err;
      }); */

    Promise.all([upcomingRequest, rocketRequest])
      .then(() => setIsLoading(false))
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);

  function getRocket(id) {
    return rockets.find((rocket) => rocket.id === id);
  }

  return (
    <div className='card_container'>
      <div className='card_wrapper'>
        {isLoading && <p>Chargement</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <ul className='cards_items'>
          {incomingMissions &&
            !isLoading &&
            rockets &&
            incomingMissions.map((mission) => (
              <CardItem
                key={`${mission.id}`}
                missionIncoming={mission}
                rocket={getRocket(mission.rocket).name}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
