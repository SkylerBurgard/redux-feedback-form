import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../modules/mapStoreToProps';

class Understanding extends Component {
  state = {
    understanding: '',
  };
  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };
  //setting our state of understanding to an empty string.

  handleNextClick = (event) => {
    if (this.state.understanding === '') {
      alert('Oops! you didnt answer :/');
    } else {
      this.props.dispatch({
        type: 'SET_UNDERSTANDING',
        payload: this.state.understanding,
      });
      this.props.history.push('/support');
    }
  };

  //click event that sends you to the support page.

  render() {
    return (
      <div className="App">
        <h1> Understanding</h1>
        <h2> How well did you understand todays content?</h2>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="let us know how you're understanding"
          id="understanding"
        />
        <button onClick={this.handleNextClick}> Next</button>
      </div>
    );
  }
}

//our return that contains our "next" button.

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Understanding);
