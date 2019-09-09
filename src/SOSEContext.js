import React, { Component } from "react";
import { Mask } from "mdbreact";

export default class SOSEContext extends Component {
  render() {
    return (
      <section
        className="Parallax"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <Mask overlay="stylish-strong">
          <h1
            className="h1-responsive font-weight-bold my-5 text-center"
            style={{ color: "white", fontSize: "50px" }}
          >
            SOSE Context
          </h1>
          <p
            className="mx-auto mb-5 w-75 text-center"
            style={{ color: "white" }}
          >
            Our group surveyed 56 students from School of Science and
            Engineering through Google Forms to gather data and obtain a better
            understanding of how religion plays a role, if any, in the lives of
            those practicing hard sciences. We have also interviewed a few SOSE
            professors to ask them how their faith and occupation go
            hand-in-hand.
          </p>
        </Mask>
      </section>
    );
  }
}
