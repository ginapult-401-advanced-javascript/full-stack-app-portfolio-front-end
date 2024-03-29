/* eslint-disable no-console */
// conditionally rendered component wrapper - render only if conditions are truthy
// capability and auth compnent, if user has those capabilities, pass
// all of it's info comes from context, which has a user on it along with some user functions
// all the important part of the user, not data, user id but not much else
// passing around json web tokens that have id, capabilities, type ('user'),
// use the SECRET as the key, will have to replicate this
import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';

import If from '../if';

class Auth extends React.Component {
  // grabs state from our context
  static contextType = LoginContext;

  render() {
    let okToRender = false;

    try {
      // returns JSX based on boolean value that comes in
      okToRender = this.context.loggedIn
        && (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
    } catch (error) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.object,
  capability: PropTypes.string,
};

export default Auth;
