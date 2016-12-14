import React from 'react';

import {
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

const RRouter = connect()(Router);

class RouterWithRedux extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('uid').then(() => true);
  }

  render() {
    // if (!this.props.app.ready) return null;
    return (
      <RRouter panHandlers={null}>
        {this.props.children}
      </RRouter>
    );
  }
}

RouterWithRedux.propTypes = {
  app: React.PropTypes.object,
  children: React.PropTypes.element,
};

function props(state) {
  return {
    app: state.app,
  };
}

export default connect(props)(RouterWithRedux);
