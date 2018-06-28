import React, { Component } from 'react';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';
import Work from '../Containers/Work/Work';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CollapsingSidebar from '../Containers/CollapsingSidebar/CollapsingSidebar';
import FourOhFour from '../Components/FourOhFour/FourOhFour';

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
            <Route path="/work" component={Work} />
            <Route path="*" component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Routes;