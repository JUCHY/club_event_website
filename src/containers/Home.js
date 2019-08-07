import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "custom.js";
    script.async = true;

    document.body.appendChild(script);
}
  render() {

    
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <div id="instafeed"></div>
        </div>
      </div>
    );
  }
}
