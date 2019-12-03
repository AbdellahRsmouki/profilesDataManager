import React, { Component } from 'react'
import {UserContext} from '../UserContext';


export default class LoginComponent extends React.Component {
  static contextType = UserContext;
    constructor(props) {
      super(props);
      this.state = {login:"",pass:"",showError:false};
    };

     submitLogin = (e) => {
      e.preventDefault();
      let {handleUserStateChange, checkAuthen} = this.context;
      if(checkAuthen(this.state.login,this.state.pass)){
          handleUserStateChange(e);
          console.log(this.context);
          console.log(this.props);
      }else{
        this.setState((prevState) => {
          return { showError: true }
        });
      }
    }
  
    render() {
      const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)

      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                value={this.state.login} onChange={ (event) => this.setState({login: event.target.value})}/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value={this.state.pass} onChange={ (event) => this.setState({pass: event.target.value})}/>
            </div>
            <DivWithErrorHandling showError={this.state.showError}>
              <button
                type="button"
                className="login-btn"
                onClick={this
                .submitLogin}>Login
              </button>
            </DivWithErrorHandling>

          </div>
        </div>
      );
    }
  
  }

  const withErrorHandling = WrappedComponent => ({ showError, children }) => {
    return (
      <WrappedComponent>
        {showError && <div className="error-message">Oops! Something went wrong!</div>}
        {children}
      </WrappedComponent>
    );
  };