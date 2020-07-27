import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  handleNextClick = (event) => {
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <h1> Thanks for taking our survey!</h1>
        <button onClick={this.handleNextClick}>Leave new feedback.</button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(Success);
