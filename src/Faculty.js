import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import YouTube from "react-youtube";

const QnA = props => {
  const { question, answer } = props;

  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        <b>{question}</b>
      </p>
      <p>
        <i>{answer}</i>
      </p>
      <br />
    </div>
  );
};

export default class Faculty extends Component {
  render() {
    const opts = {
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Container style={{ maxWidth: "80%" }} id={"Interview"}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">
          Words from the SOSE Faculty
        </h1>
        <Row style={{ marginBottom: "50px" }}>
          <Col lg="12" md="12">
            <h3>Panes, Vivian A., Ph.D.</h3>

            <h4>Assistant Professor, Biology Dept</h4>
            <br />
            <p>
              <i>
                "Science, like biology, has enhanced my relationship with God.
                As I've said, I don't believe in a religion. It should be a
                personal relationship with a sovereign God who created me, who
                created all living things. I'm a biologist, so I really
                appreciate every small or great or intricate living thing that
                God has created. So I don't really have a problem with
                reconciling between science and my relationship with God."
              </i>
            </p>
          </Col>

          <Col lg="3" md="12" />

          <Col lg="6" md="12">
            <YouTube
              videoId="lI8yE1ynWLs"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>

          <Col lg="3" md="12" />
        </Row>

        <Row style={{ marginBottom: "50px" }}>
          <Col lg="12" md="12">
            <h3>Ramos, Catherine L., M.S.</h3>
            <h4>Full Time Instructor, ECCE Dept</h4>
            <br />

            <QnA
              question="What is your religion?"
              answer='"I identify myself as a Roman Catholic. I was baptized and have
                undergone most of the sacraments under the Catholic Church."'
            />
            <QnA
              question="Are there points in your career where it has been difficult or
                almost impossible to reconcile your faith with your field of
                study?"
              answer='"No, in my career and during my adult life, I did not find any
                difficulty in reconciling my religious views with science. What
                I found and still find difficulty reconciling actually was some
                of the practices within the Catholic Church that seem counter to
                the teachings within the Holy Bible. For example, God
                exemplifies love. However, why is it that some people are deemed
                not worthy of the sacraments because of their sexuality. Does
                this mean that they are less worthy people to love and people
                only deserve love if they meet certain tenets even if these were
                out of their control?"'
            />
            <QnA
              question="Does the religion you practice have any influence or
                significance in your scientific field? (i.e. research, manner of
                teaching)"
              answer='"Yes. It is the basis of the Abrahamic religions, including that
                of the Roman Catholic Church, that there is one omniscient,
                omnipotent and omnipresent God. In my practice of biomedical
                engineering, I have found the human body design to be very
                efficient and robust. The intricacies of the human physiology
                leaves me spellbound and believing that there is indeed an
                all-knowing architect behind all these. I think this belief
                motivates me to be more curious of all the things around me. It
                also humbles me to the fact that I know so little and yet it
                inspires me to learn more about the workings of the human body."'
            />
            <QnA
              question="Do you attempt to keep your religious life and academic career
                separate or do they meld into each other?"
              answer='"My religious beliefs complement my academic career. As I
                mentioned, I find no conflict in those two. What I find
                conflicting most of the time is the attitude of people and
                religious leaders towards religion and my religious leanings and
                how I interpret the Holy Bible. I find that my beliefs and how I
                interpret the Bible complements my academic career. I find so
                many instances in the Bible which exemplifies how God values
                science and engineering."'
            />
            <QnA
              question="If they're intertwined, in what way do they interact with each
                other?"
              answer='"I find that my beliefs and how I interpret the Bible
                complements my academic career. I find so many instances in the
                Bible which exemplifies how God values science and engineering.
                For example, in Kings, there is a very detailed description of
                the design of the temple built under King Solomon. From the
                measurements of the walls to the measurement of the trimmings
                which would be an example of early civil and architecture down
                to the design of the inner rooms within the temple."'
            />

            <QnA
              question="Did you have any prior views on the interaction between science
                and religion? How did it develop throughout the years?"
              answer='"As a child, my views were very limited as they were formed by
                conservative animation shows. However, through the years, I have
                developed a more liberal approach embracing a loving God, a
                higher human being that encompasses all nationalities, sex and
                religious sect. Furthermore, after talking with people of other
                religious sect like Muslims from the Middle East, I realized how
                they respect Abraham, Moses, Jesus and Mary. In fact, Sulaiman
                is Islam for Solomon. That Islam and Christianity fall under the
                Abrahamic religion. Also, other non-Abrahamic religions like
                Buddhism also believe in higher beings. In which case, if these
                religions share so many characteristics, why are there so many
                wars fought in the name of religion?"'
            />
          </Col>
        </Row>
      </Container>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
