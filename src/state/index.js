import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  handleLogout() {
    this.setState({
      isLogin: false,
    });
  }

  renderHTML() {
    // dk ? "Dung" : "Sai"
    return this.state.isLogin ? (
      <div>
        <p>Hello Cybersoft</p>
        <button className="btn btn-danger" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    ) : (
      <div>
        <p>Vui long login</p>
        <button className="btn btn-success" onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }

  render() {
    // console.log("render state");
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
