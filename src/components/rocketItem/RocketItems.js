import React, { useState } from 'react';
import { CustomModal } from '../';
import { useTranslation } from 'react-i18next';

import Modal from 'react-modal';
import '../customModal/CustomModal.css';

function RocketItems({ rocket }) {
  const [modal, setModal] = useState({ isOpen: false });
  const { t, i18n } = useTranslation();

  function handleToggleModal() {
    setModal({ isOpen: true });
  }
  function handleCloseModal() {
    setModal({ isOpen: false });
  }

  return (
    <li className='rocket-card-item'>
      <CustomModal
        rocket={rocket}
        openModal={modal.isOpen}
        onClose={handleCloseModal}
      />
      <img
        className='rocket-card-item-img'
        src={rocket.flickr_images[0]}
        alt='rocket'
      />
      <div className='roket-card-item-body'>
        <p className='rocket-card-item-name'>{rocket.name}</p>
        <p className='rocket-card-item-description'>{rocket.description}</p>
        <button className='rocket-card-item-btn' onClick={handleToggleModal}>
          {t('More information')}
        </button>
      </div>
    </li>
  );
}

export default RocketItems;
