import React, { Component } from "react";
import ExampleEvent from "./example";

export default class HandlingEvents extends Component {
  eventClick() {
    console.log(123);
  }

  eventClickParmas(user, age) {
    console.log(user, age);
  }

  render() {
    return (
      <div>
        <h3>*HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.eventClick}>
          Click
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            this.eventClickParmas("Nguyen", 18);
          }}
        >
          Click Params
        </button>

        <ExampleEvent />
      </div>
    );
  }
}
