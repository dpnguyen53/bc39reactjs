import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleError = () => {};

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            />
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
