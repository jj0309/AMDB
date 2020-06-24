import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import LandingPage from './Components/LandingPage/LandingPage'
import SearchPage from './Components/SearchPage/SearchPage'
import DiscoverPage from './Components/DiscoverPage/DiscoverPage';
import AboutPage from './Components/AboutPage/AboutPage'
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Components/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/search' exact component={SearchPage}/>
        <Route path='/search/:movieID' component={SearchPage}/>
        <Route path='/discover' exact component={()=><DiscoverPage genre={false}/>}/>
        <Route path='/discover/:genre' exact component={()=><DiscoverPage genre={true}/>}/>
        <Route path='/discover/:genre/:page' component={()=><DiscoverPage genre={true}/>}/>
        <Route path ='/Login' component={LoginPage}/>
        <PrivateRoute exact path='/about' component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
