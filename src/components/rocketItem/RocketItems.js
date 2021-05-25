import React, { useState } from 'react';
import { CustomModal } from '../';

import Modal from 'react-modal';
import '../customModal/CustomModal.css';

function RocketItems(props) {
  const rocket = props.rocket;
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <li className='rocket-card-item'>
      <CustomModal
        className='custom-modal'
        rocket={rocket}
        openModal={openModal}
        handleModal={handleModal}
      />
      <img
        className='rocket-card-item-img'
        src={props.rocket.flickr_images[0]}
        alt='rocket'
      />
      <div className='roket-card-item-body'>
        <p className='rocket-card-item-name'>{rocket.name}</p>
        <p className='rocket-card-item-description'>{rocket.description}</p>
        <button className='rocket-card-item-btn' onClick={handleModal}>
          More information
        </button>
      </div>
    </li>
  );
}

export default RocketItems;
