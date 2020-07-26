import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../components/comments';
import Feeling from '../components/feeling';
import Support from '../components/support';
import Understanding from '../components/understanding';
import Review from '../components/review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <Route exact path="/" component={App} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/understanding" component={Understanding} />
        <br />
      </div>
    );
  }
}

export default App;
