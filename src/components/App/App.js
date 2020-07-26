import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';

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
        <Router>
          <Route exact path="/" component={App} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/understanding" component={Understanding} />
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
