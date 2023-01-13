import React, { Component } from "react";

export default class FormValidation extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
