import React, { Component } from "react";
import { Row, Col } from "mdbreact";

import kyle from "./images/kyle.jpg";
import omeng from "./images/omeng.jpg";
import sharon from "./images/sharon.jpg";
import elmo from "./images/elmo.jpg";
import nate from "./images/nate.jpg";

const Member = props => {
  const { image, name, course } = props;

  return (
    <Col md="2" className="mb-md-0 mb-5">
      <img
        src={image}
        className="rounded z-depth-1-half img-fluid"
        alt="Sample avatar"
      />
      <h4 className="font-weight-bold grey-text my-4">{name}</h4>
      <h6 className="text-uppercase grey-text mb-3">{course}</h6>
    </Col>
  );
};

export default class Team extends Component {
  render() {
    return (
      <footer
        className="d-flex"
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3F51B5"
        }}
      >
        <section>
          <h2 className="h1-responsive font-weight-bold my-5 white-text">
            Our amazing team
          </h2>

          <Row>
            <Col md="1" />
            <Member
              image={sharon}
              name="Hyunseo Ha"
              course="4 - BS Life Sciences"
            />
            <Member
              image={nate}
              name="Nate Kibanoff"
              course="4 - BS Computer Science"
            />
            <Member
              image={elmo}
              name="Elmo Lingad"
              course="4 - BS Computer Science"
            />
            <Member
              image={omeng}
              name="Omeng Lopez"
              course="4 - BS Life Sciences"
            />
            <Member
              image={kyle}
              name="Kyle Ordona"
              course="4 - BS Computer Engineering"
            />
          </Row>
        </section>
      </footer>
    );
  }
}
