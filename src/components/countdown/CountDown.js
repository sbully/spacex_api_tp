import React, { useState, useEffect } from 'react';

function CountDown(props) {
  const MINUTES = 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  let lastDateUtc;

  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  function getCountDown() {
    console.log(props.date_utc);
    if (lastDateUtc !== props.date_utc) {
      const launchDate = props.date_utc;
      const timeToLaunch = (Date.parse(launchDate) - Date.now()) / 1000;
      console.log(timeToLaunch);
      setCountDown({
        days: Math.floor(timeToLaunch / DAYS),
        hours: Math.floor((timeToLaunch % DAYS) / HOURS),
        minutes: Math.floor((timeToLaunch % HOURS) / MINUTES),
        seconds: Math.floor(timeToLaunch % MINUTES),
      });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getCountDown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
