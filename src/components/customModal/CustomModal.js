import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';

function CustomModal(props) {
  return (
    <Modal className='custom-modal' isOpen={props.openModal}>
      <div className='modal-container'>
        <img
          className='modal-img'
          src={props.rocket.flickr_images[1]}
          alt='rocket'
        />
        <div className='modal-text-container'>
          <div className='modal-text-wrapper'>
            <h1 className='modale-rocket-name'>{props.rocket.name}</h1>
            <p className='modale-rocket-weight'>
              <strong>Poids:</strong> {Math.floor(props.rocket.mass.kg / 1000)}{' '}
              Tonnes
            </p>
            <p className='modale-rocket-height'>
              <strong>Taille:</strong> {props.rocket.height.meters} mètres
            </p>
            <p className='modale-rocket-firstflight'>
              <strong>First flight :</strong> {props.rocket.first_flight}
            </p>
            <p className='modale-rocket-description'>
              <strong>Description:</strong> {props.rocket.description}
            </p>
            <p>
              Get more information on :<span> </span>
              <a
                className='modale-rocket-wiki'
                href={props.rocket.wikipedia}
                rel='noreferrer'
                target='_blank'
              >
                <strong>Wikipedia</strong>
              </a>
            </p>
          </div>
          <div className='modal-button-container'>
            <button
              className='rocket-card-item-btn'
              onClick={props.handleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
