import React, { Component } from "react";

export default class Child extends Component {
  handleResetUsername = () => {
    this.props.resetUsername("Cybersoft");
  };

  render() {
    const { username, age } = this.props;
    return (
      <div>
        <h3>*Child</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className="btn btn-danger" onClick={this.handleResetUsername}>
          Reset Username
        </button>
      </div>
    );
  }
}
