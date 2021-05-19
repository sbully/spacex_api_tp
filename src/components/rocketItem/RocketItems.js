import React from 'react';

function RocketItems(props) {
  const rocket = props.rocket;

  return (
    <li className='rocket-card-item'>
      <img
        className='rocket-card-item-img'
        src={props.rocket.flickr_images[0]}
        alt='...'
      />
      <div className='roket-card-item-body'>
        <p className='rocket-card-item-name'>{rocket.name}</p>
        <p className='rocket-card-item-description'>{rocket.description}</p>
        <button className='rocket-card-item-btn'>More information</button>
      </div>
    </li>
  );
}

export default RocketItems;
