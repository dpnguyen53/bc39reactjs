import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: data,
      keyword: "",
      userEdit: null,
    };
  }

  _findIndex = (id) => this.state.userList.findIndex((user) => user.id === id);

  /**
   * Xoa User
   */
  handleDelete = (id) => {
    const index = this._findIndex(id);
    if (index !== -1) {
      let userList = this.state.userList;
      userList.splice(index, 1);
      this.setState({
        userList,
      });
    }
  };

  /**
   * Seach
   */
  handleSearch = (keyword) => {
    this.setState({
      keyword,
    });
  };

  /**
   * Submit
   */
  handleSubmitUser = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      //Update
      const index = this._findIndex(user.id);
      if (index !== -1) {
        userList[index] = user;
      }
    } else {
      //Add
      const userNew = { ...user, id: new Date().getTime() };
      userList = [...this.state.userList, userNew];
    }
    this.setState({
      userList,
    });
  };

  /**
   * Edit
   */
  handleEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  render() {
    let { userList, keyword, userEdit } = this.state;
    //filter
    userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleSearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          // userList={userList}
          getUserDelete={this.handleDelete}
          getUserEdit={this.handleEdit}
        />
        <Modal getUserSubmit={this.handleSubmitUser} userEdit={userEdit} />
      </div>
    );
  }
}

export default Home;
