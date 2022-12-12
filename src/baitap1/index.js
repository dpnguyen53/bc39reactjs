import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }
}

export default Baitap1;
