import React from "react";

export default function Item(props) {
  return (
    <div>
      <h3>*Item</h3>
      {props.children}
    </div>
  );
}
