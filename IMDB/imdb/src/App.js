import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import SearchPage from './Components/SearchPage/SearchPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/search' component={SearchPage}/>
      </Switch>
    </Router>
  );
}

export default App;
