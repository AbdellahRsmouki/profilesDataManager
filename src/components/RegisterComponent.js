import React, { Component } from 'react'
import Modal from 'react-awesome-modal';;

export default class RegisterComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible:false
      };
    }
  
    submitRegister(e) {
      this.openModal();
    }

    openModal() {
        this.setState({
          modalVisible : true
        });
    }

    closeModal() {
        this.setState({
          modalVisible : false
        });
    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="login-input" placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitRegister
              .bind(this)}>Register</button>
          </div>
          <Modal visible={this.state.modalVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
              <div className="register-message">
                  <h1 >Registeration</h1>
                  <p>We are gowing to send you a response to your email as soon as possible</p>
                  <div onClick={() => this.closeModal()} className="close-register-message">Close</div>
              </div>
          </Modal>
        </div>
      );
    }
  }