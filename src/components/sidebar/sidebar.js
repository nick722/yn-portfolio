import React, { Component } from "react";

import "./sidebar.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <h1>
          <a href="index.html">Nikolai Yakuschenko</a>
        </h1>
        <p>Nikolai.Yakuschenko@gmail.com</p>
      </aside>
    );
  }
}
