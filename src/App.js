import React from 'react';
import './App.css';

import Home from './pages/Home';
import SingleProfilePage from './pages/SingleProfile';
import ErrorPage from './pages/Error';
import ProfilesPage from './pages/Companies';
import AuthenPage from './pages/AuthenPage';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar'
function App() {

  if(false){
    return(
      <Switch>
        <Route component={AuthenPage} />
      </Switch>
    )
  }

  return ( 
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profiles' component={ProfilesPage} />
      <Route exact path='/profiles/:slug' component={SingleProfilePage} />
      <Route exact path='/companies' component={ProfilesPage} />
      <Route exact path='/companies/:slug' component={SingleProfilePage} />
      <Route component={ErrorPage} />
      </Switch>
    </>
    );
}

export default App;
