import React from 'react';

function HomeModule(props) {
  return (
    <div
      className='home-module-wrapper'
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className='left-wrapper'>
        <p className='left-wrapper-context'>{props.context}</p>
        <h1 className='left-wrapper-title'>{props.Title}</h1>
        <p className='left-wrapper-description'>{props.description}</p>
      </div>
    </div>
  );
}

export default HomeModule;
