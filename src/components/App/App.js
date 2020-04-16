import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import Main from "../main/main";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Sidebar></Sidebar>
        <Main></Main>
      </>
    );
  }
}

export default App;
