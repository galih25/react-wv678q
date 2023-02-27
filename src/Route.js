import React from 'react';
import Login from './containers/Login';

function Route() {
  return (
    <Route exact path="/login">
      <Login />
    </Route>
  );
}

export default Route;
