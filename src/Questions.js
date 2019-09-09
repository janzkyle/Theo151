import React, { Component } from "react";
import { Container } from "mdbreact";
import { Accordion, AccordionItem } from "react-light-accordion";

export default class Questions extends Component {
  render() {
    return (
      <Container style={{ maxWidth: "80%" }}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">
          Essay Questions
        </h1>
        <Accordion atomic={true}>
          <AccordionItem title="How will you justify the reconciliation (or the lack thereof) between science and religion?">
            <ul className="text-left" style={{ padding: "18px" }}>
              <li>
                I am able to understand that there are some questions that can
                only be answered by science and it is the same with religion.
                Some common misconceptions such as taking the whole Bible
                literally will clash with science although the Bible is not
                meant to be taken completely literally.
              </li>
              <li>
                I grew up without extreme influence of religion, I don't really
                need it in my life. Thus, I think that there really isn't this
                extreme need to actually reconcile the two things.
              </li>
              <li>
                The world isn't just black and white. Sometimes, science and
                religion mix and can help explain something the other could not
                explain yet in their terms. There is no one absolute truth in
                life. And I believe science and religion can go hand-in-hand for
                as long as they do not trample over the other's beliefs. They
                can share where they stand but they must not cross each other's
                line.
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="If you think science and religion are irreconcilable in some aspects, where do you draw the line between them and how do you concretize that belief?">
            <ul className="text-left" style={{ padding: "18px" }}>
              <li>
                Progress and morality. There are progressive and advancing
                technologies that would benefit mankind which are duly opposed
                by the church.
              </li>
              <li>
                They're only irreconcilable where religion says science is
                wrong. Incomplete maybe, but science and testing is the only way
                to know something is right. It's more likely that the belief
                (which has less basis) is wrong
              </li>
              <li>
                When religion creates hindrances in the name of scientific
                progress, then there shouldn't be a tight hold of religion to
                prevent such acts. Again, I'm arguing that science knows more of
                the body than religion.
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </Container>
    );
  }
}
