import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Home, Upcoming, Rockets } from './pages/';
import { NavBar } from './components/';
import React, { useState } from 'react';
import LangageContext from './components/assets/langage/LangageContext';

function App() {
  const [langage, setLangage] = useState('ENGLISH');

  return (
    <LangageContext.Provider value={[langage, setLangage]}>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upcoming' exact component={Upcoming} />
          <Route path='/rockets' exact component={Rockets} />
        </Switch>
      </Router>
    </LangageContext.Provider>
  );
}

export default App;
