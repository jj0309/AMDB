import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import SearchPage from './Components/SearchPage/SearchPage'
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/search' exact component={SearchPage}/>
        <Route path='/search/:movieTitle' component={SearchPage}/>
      </Switch>
    </Router>
  );
}

export default App;
