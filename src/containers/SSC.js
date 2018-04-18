import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';
import HomeMain from '../Components/Home/HomeMain';
import Work from '../Components/Work/Work';
import Contact from '../Components/Contact/Contact';
// import Footer from '../Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class SSC extends Component {
  render() {
    return (
        <Router>
          <div>
            <Banner />
            <Header />
              <Switch>
                <Route exact path="/" component={HomeMain} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
              </Switch>
          </div>
        </Router>
    );
  }
}

export default SSC;