import React from 'react';
import './Rockets.css';
import { RocketsCards } from '../../components/';
import { useTranslation } from 'react-i18next';

function Rockets() {
  const { t, i18n } = useTranslation();
  return (
    <div className='rocket'>
      <h1 className='rocket-title'>{t('Rockets')}</h1>
      <RocketsCards />
    </div>
  );
}

export default Rockets;
