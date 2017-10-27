import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Articles from '../components/Articles';
import Navbar from '../components/Navbar';
import Topics from '../components/Topics';
import NotFound from '../components/NotFound';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/topics" component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
