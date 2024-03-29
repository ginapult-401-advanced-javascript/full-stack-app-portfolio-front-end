// auth form
import React from 'react';
import { LoginContext } from './context';

import If from '../if';

class Login extends React.Component {
  static contextType = LoginContext;
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = (event, type) => {
    event.preventDefault();
    this.context.login(this.state.username, this.state.password, type);
  };

  render() {
    return (
      <>
      <If condition={this.context.loggedIn}>
        <button onClick={this.context.logout}>Log Out</button>
      </If>

      <If condition={!this.context.loggedIn}>
        <form>
          <input
            placeholder="Enter your username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter your password"
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button onClick={(event) => this.handleSubmit(event, 'signin')}>Sign In</button>
          <button onClick={(event) => this.handleSubmit(event, 'signup')}>Sign Up</button>
        </form>
      </If>
    </>
    );
  }
}

export default Login;
