import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Customize from './pages/customize'
import Nav from './components/nav'
import Footer from './components/footer'

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/customize' component={Customize} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
