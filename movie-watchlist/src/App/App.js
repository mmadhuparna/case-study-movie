
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppContainer from "../components/watchlist/watchlistApp/Container";
import LoginForm from "../components/login/LoginForm";
import withClass from '../Class';
import css from './App.css';

function App() {
  return (

<div className="container">
  {/*route to pages login and watchlist*/}
    <Switch>
      <Route path="/" exact={true} render={ () => <Redirect to="login" /> }/>
      <Route path="/login" component={LoginForm} />            
      <Route path="/watchlist" component={AppContainer} />            
    </Switch>
  
  </div>
  )
}
export default withClass(App, css.App);

