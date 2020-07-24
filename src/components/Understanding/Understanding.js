import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../modules/mapStoreToProps';

class UnderStanding extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStoreToProps)(Understanding);
