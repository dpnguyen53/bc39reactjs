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
      manvValid: false,
      tennvValid: false,
      emailValid: false,
      formValid: false,
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

  handleError = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() === "" ? `(*) Vui long nhap ${name}` : "";
    let { manvValid, tennvValid, emailValid } = this.state;
    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length < 4) {
          mess = "Vui long nhap tu 4 ki tu tro len";
          manvValid = false;
        }
        break;

      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
          mess = "Vui long nhap email dung dinh dang!";
          emailValid = false;
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
        formValid: manvValid && tennvValid && emailValid,
      },
      () => {
        console.log(this.state);
      }
    );
  };

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
            {this.state.errors.manv && (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            )}
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
            {this.state.errors.tennv && (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            )}
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
            {this.state.errors.email && (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
