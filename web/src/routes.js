import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Initial from './pages/Initial';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Initial} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}
