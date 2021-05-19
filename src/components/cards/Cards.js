import React, { useState, useEffect } from 'react';
import CardItem from '../cardItem/CardItem';
import './Cards.css';

function Cards() {
  const [missionIncoming, setMissionIncomming] = useState();
  const [rockets, setRocket] = useState();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/upcoming')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMissionIncomming(result);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRocket(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getRocket(id) {
    let rocket;
    rockets.filter((rocket) => rocket.id === id).map((rock) => (rocket = rock));
    return rocket;
  }

  return (
    <div className='card_container'>
      <div className='card_wrapper'>
        <ul className='cards_items'>
          {missionIncoming &&
            rockets &&
            missionIncoming.map((mission) => (
              <CardItem
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
