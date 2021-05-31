import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
import { useTranslation } from 'react-i18next';

function CustomModal({ openModal, rocket, onClose }) {
  function handleClickClose() {
    onClose();
  }
  const { t, i18n } = useTranslation();

  return (
    <Modal className='custom-modal' isOpen={openModal}>
      <div className='modal-container'>
        <img className='modal-img' src={rocket.flickr_images[1]} alt='rocket' />
        <div className='modal-text-container'>
          <div className='modal-text-wrapper'>
            <h1 className='modale-rocket-name'>{rocket.name}</h1>
            <p className='modale-rocket-weight'>
              <strong>{t('Wheigh')}:</strong>{' '}
              {Math.floor(rocket.mass.kg / 1000)} Tonnes
            </p>
            <p className='modale-rocket-height'>
              <strong>{t('Heigh')}:</strong> {rocket.height.meters} mètres
            </p>
            <p className='modale-rocket-firstflight'>
              <strong>{t('First flight')} :</strong> {rocket.first_flight}
            </p>
            <div className='modale-description-wrapper'>
              <p className='modale-rocket-description'>
                <strong>{t('Description')}:</strong> {rocket.description}
              </p>
            </div>
            <p>
              {t('Get more information on')} :<span> </span>
              <a
                className='modale-rocket-wiki'
                href={rocket.wikipedia}
                rel='noreferrer'
                target='_blank'
              >
                <strong>Wikipedia</strong>
              </a>
            </p>
          </div>
          <div className='modal-button-container'>
            <button className='rocket-card-item-btn' onClick={handleClickClose}>
              {t('Close')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
