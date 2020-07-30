import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Success/Success';

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
          <Route exact path="/" component={Feeling} />
          <Route exact path="/comments" component={Comments} />
          {/* <Route exact path="/feeling" component={Feeling} /> */}
          <Route exact path="/support" component={Support} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/success" component={Success} />
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
