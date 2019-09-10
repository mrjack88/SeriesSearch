import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};

export default App;
