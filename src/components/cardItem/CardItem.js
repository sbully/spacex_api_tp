import React, { useState, useEffect } from 'react';
import { SpaceXLogoWhite, SpaceXLogoBlack } from '../assets/';
import { CountDown } from '../../components/index';

function CardItem(props) {
  return (
    <li className='cards_item'>
      <div className='cards_item_container'>
        <img
          className='cards_item_img'
          src={props.missionIncoming.links.patch.small || SpaceXLogoBlack}
          alt={`mission ${props.missionIncoming.name}`}
        />
        <div className='cards_item_text_container'>
          <p className='cards_item_name'>{props.missionIncoming.name}</p>
          <p className='cards_item_rocket'>{props.rocket}</p>
          <CountDown date_utc={props.missionIncoming.date_utc} />
        </div>
      </div>
    </li>
  );
}

export default CardItem;
