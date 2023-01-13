import React, { PureComponent } from "react";

export default class ChildPure extends PureComponent {
  render() {
    console.log("ChildPure");
    return (
      <div>
        <h3>ChildPure</h3>
      </div>
    );
  }
}
