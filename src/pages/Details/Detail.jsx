import React, { Component } from 'react'
import { store } from '../..';
export default class Detail extends Component {



  render() {
    // this.props.match.params.id 
    
    // console.log(window.location.pathname.split('/'));
    let arrURL = window.location.pathname.split('/');
    let paramId = arrURL[arrURL.length - 1];
    
    // let userDetail = store.getState().userReducer.userList[paramId];
    // console.log(userDetail);

    return (
      <div>
      

      </div>
    )
  }


  componentDidMount() {
    //hàm này chạy sau render để can thiệp vào quá trình thay đổi state, prop của component
  }
}
