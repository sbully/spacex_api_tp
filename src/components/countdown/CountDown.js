import React, { useState, useEffect } from 'react';

function CountDown(props) {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const MINUTES = 60;
    const HOURS = MINUTES * 60;
    const DAYS = HOURS * 24;
    const interval = setInterval(() => {
      if (props.date_utc) {
        const launchDate = props.date_utc;
        const timeToLaunch = (Date.parse(launchDate) - Date.now()) / 1000;

        setCountDown({
          days: Math.floor(timeToLaunch / DAYS),
          hours: Math.floor((timeToLaunch % DAYS) / HOURS),
          minutes: Math.floor((timeToLaunch % HOURS) / MINUTES),
          seconds: Math.floor(timeToLaunch % MINUTES),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props.date_utc]);

  return (
    <>
      <p className='cards_item_countdown'>
        <i className='fas fa-clock'></i>
        {` ${countDown.days}d ${countDown.hours}h ${countDown.minutes}m ${countDown.seconds}s`}
      </p>
    </>
  );
}

export default CountDown;
