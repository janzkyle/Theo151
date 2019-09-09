import React, { Component } from "react";
import Background from "./images/Photo12.jpeg";

export default class Title extends Component {
  render() {
    var image = {
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${Background})`
    };

    return (
      <section className="d-flex" style={image}>
        <h1
          className="white-text font-weight-bold"
          style={{ fontSize: "50px" }}
        >
          Observation &amp; Revelation:
          <br />
          A Study on the Religious Sensibilities
          <br />
          of Scientifically-Inclined Individuals
        </h1>
      </section>
    );
  }
}
