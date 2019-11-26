import React, { Component } from 'react'

import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';


export default class AuthenPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true,
        isRegisterOpen: false
      };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
      }
    
      showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
      }
  
    render() {
  
      return (
        <div className="root-container">
            <div className="box-controller">
                <div
                    className={"controller " + (this.state.isLoginOpen
                    ? "selected-controller"
                    : "")}
                    onClick={this
                    .showLoginBox
                    .bind(this)}>
                    Login
                </div>
                <div
                    className={"controller " + (this.state.isRegisterOpen
                    ? "selected-controller"
                    : "")}
                    onClick={this
                    .showRegisterBox
                    .bind(this)}>
                    Register
                </div>
            </div>
            <div className="box-container">
                {this.state.isLoginOpen && <LoginComponent/>}
                {this.state.isRegisterOpen && <RegisterComponent/>}
            </div>
        </div>
      );
    }
  }