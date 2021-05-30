import React from 'react';
import { HomeModule } from '../../components/';
import {
  CrewImg,
  HlsImg,
  HPSN,
  DragonDockingImg,
  Sl26Img,
  ISSImg,
} from '../../components/assets';

import './Home.css';
import { useTranslation } from 'react-i18next';

const data = [
  {
    img: CrewImg,
    title: 'DRAGON RETURNS TO EARTH',
    context: 'COMPLETED MISSION',
    description:
      'After 167 days, Dragon completes its first long-duration mission',
  },
  {
    img: DragonDockingImg,
    title: 'CREW-2 DOCKS TO ISS',
    context: 'RECENT LAUNCH',
    description:
      'On Saturday April 24 at 5h08 AM EDT, Dragon autonomously docked with the International Space Station',
  },
  {
    img: HPSN,
    title: 'STARSHIP SN15',
    context: 'FLIGHT TEST',
    description: null,
  },
  {
    img: Sl26Img,
    title: 'STARLINK MISSION',
    context: 'RECENT LAUNCH',
    description: null,
  },
  {
    img: HlsImg,
    title: 'Starship to Land NASA Astronauts on the Moon',
    context: null,
    description: null,
  },
  {
    img: ISSImg,
    title: 'Starship to Land NASA Astronauts on the Moon',
    context: null,
    description: null,
  },
];

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className='home'>
      {data &&
        data.map((element) => (
          <HomeModule
            className='home-module'
            img={element.img}
            Title={t(`${element.title ? element.title : ''}`)}
            context={t(`${element.context ? element.context : ''}`)}
            description={t(`${element.description ? element.description : ''}`)}
          />
        ))}
    </div>
  );
}

export default Home;
