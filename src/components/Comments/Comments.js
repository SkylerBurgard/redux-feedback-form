import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../modules/mapReduxStateToProps';

class Comments extends Component {
  state = {
    comments: '',
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleNextClick = (event) => {
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: this.state.comments,
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Additional Comments</h1>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="additional comments"
          id="comments"
        />
        <button onClick={this.handleNextClick}> Complete</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Comments);
