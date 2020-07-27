import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../modules/mapStoreToProps';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  handleNextClick = (event) => {
    if (this.state.feeling === '') {
      alert('please enter your feelings');
    } else {
      this.props.dispatch({
        type: 'SET_FEELING',
        payload: parseInt(this.state.feeling),
      });
      this.props.history.push('/understanding');
    }
  };

  render() {
    return (
      <div className="App">
        <h1> How are you feeling today?</h1>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="how are you feeling?"
          id="feeling"
        />
        <button onClick={this.handleNextClick}> Next page </button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
