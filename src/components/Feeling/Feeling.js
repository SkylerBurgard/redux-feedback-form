import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../modules/mapStoreToProps';

class Feeling extends Component {
  state = {
    feeling: '',
  };

  render() {
    return <div></div>;
  }
}

export default connect(mapStoreToProps)(feeling);
