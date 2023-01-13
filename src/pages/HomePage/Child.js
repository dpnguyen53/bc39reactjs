import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameChild: "Cybersoft",
      numberChild: 5,
    };
  }
  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps", nextProps);
  //     this.setState({})
  //   }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps.number === currentState.numberChild) {
      //Cap nhat state => usernameChild = "Dinh Phuc Nguyen"
      return {
        usernameChild: "Dinh Phuc Nguyen",
      };
    }
    return null;
  }

  render() {
    console.log("Child");
    return (
      <div>
        <h3>Child</h3>
        <p>
          UsernameChild: {this.state.usernameChild} - numberChild:
          {this.state.numberChild}
        </p>
      </div>
    );
  }
}
