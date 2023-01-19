import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';
import Home from './Home';
import Person from './Person';
import NotFound from './NotFound';
import Header from './Header';

const DemoRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/person/:id" component={Person} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default DemoRouter;
