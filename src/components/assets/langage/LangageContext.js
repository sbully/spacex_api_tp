import React, { useState } from 'react';

/* const langage = {
  ENGLISH: 'en-US',
  FRENCH: 'fr',
  DEUTSCH: 'de',
}; */

const LangageContext = React.createContext([{}, () => {}]);

export default LangageContext;
