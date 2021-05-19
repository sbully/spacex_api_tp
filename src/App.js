import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Upcoming, Rockets } from './pages/';
import { NavBar } from './components/';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/upcoming' exact component={Upcoming} />
        <Route path='/rockets' exact component={Rockets} />
      </Switch>
    </Router>
  );
}

export default App;
