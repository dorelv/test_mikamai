import React from "react";
import "./cssStyles/App.css";
import Nav from './Nav'
import Linguaggi from './pages/Linguaggi'
import Frameworks from './pages/Frameworks'
import Stili from './pages/Stili'

import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default function App(){

  return (
    <Router>   
      <div className="App">
        <Nav />
        <Switch>   
          <Route exact path="/test_mikamai" component={() => (<Redirect to='/linguaggi' />)} />
          <Route path='/linguaggi' component={Linguaggi} />
          <Route path='/frameworks' component={Frameworks} />
          <Route path='/stili' component={Stili} />
        </Switch>
      </div>
    </Router>
  );
}

