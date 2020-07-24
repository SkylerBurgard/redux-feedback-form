import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../modules/mapReduxStateToProps';

class Comments extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapReduxStateToProps)(Comments);
