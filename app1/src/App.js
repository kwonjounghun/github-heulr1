import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/sub">
        <Sub />
      </Route>
    </Switch>
  );
};

export default App;
