import React, { Component } from "react";

class Search extends Component {
  handleOnchange = (event) => {
    this.props.getKeyword(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

export default Search;
