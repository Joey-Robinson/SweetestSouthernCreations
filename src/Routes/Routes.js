import React, { Component } from 'react';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';
import Requests from '../Components/Requests/Requests';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CollapsingSidebar from '../Containers/CollapsingSidebar/CollapsingSidebar';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <CollapsingSidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/requests" component={Requests} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Routes;