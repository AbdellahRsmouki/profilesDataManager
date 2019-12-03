import React from 'react';
import './App.css';

import Home from './pages/Home';
import SingleProfilePage from './pages/SingleProfile';
import SingleCompanyPage from './pages/SingleCompany';
import ErrorPage from './pages/Error';
import CompaniesPage from './pages/Companies';
import ProfilesPage from './pages/profiles';
import AuthenPage from './pages/AuthenPage';
import {useContext} from 'react'

import {Route, Switch} from 'react-router-dom';
import {UserContext} from './UserContext';


import Navbar from './components/Navbar'
function App() {
  const context = useContext(UserContext);
  console.log(context);
  const {loggedIn}=context;
  if(loggedIn){
    return(
      <Switch>
        <Route path='/auth' component={AuthenPage} />
      </Switch>
    )
  }

  return ( 
    <>
    <Navbar />
    <Switch>
      <Route path='/auth' component={AuthenPage} />
      <Route exact path='/' component={Home} />
      <Route exact path='/profiles' component={ProfilesPage} />
      <Route exact path='/profiles/:slug' component={SingleProfilePage} />
      <Route exact path='/companies' component={CompaniesPage} />
      <Route exact path='/companies/:slug' component={SingleCompanyPage} />
      <Route component={ErrorPage} />
      </Switch>
    </>
    );
}

export default App;
