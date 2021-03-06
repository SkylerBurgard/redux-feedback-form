import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../modules/mapStoreToProps';

class Support extends Component {
  state = {
    support: '',
  };

  handleChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  handleNextClick = (event) => {
    if (this.state.support === '') {
      alert('Tell us how supported you feel');
    } else {
      this.props.dispatch({
        type: 'SET_SUPPORT',
        payload: parseInt(this.state.support),
      });
      this.props.history.push('/comments');
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Do you feel supported?</h1>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="Do you feel supported?"
          id="feeling"
        />
        <button onClick={this.handleNextClick}> Next page </button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Support);
