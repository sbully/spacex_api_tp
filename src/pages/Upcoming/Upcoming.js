import React from 'react';
import { Cards } from '../../components/';
import './Upcoming.css';
import { useTranslation } from 'react-i18next';

function Upcoming() {
  const { t, i18n } = useTranslation();
  return (
    <div className='Upcoming'>
      <h1 className='Upcoming-title'>{t('Launches Upcoming')}</h1>
      <Cards />
    </div>
  );
}

export default Upcoming;
