import React, { Component } from 'react';
import { Container, Row, Col, View } from "mdbreact";
import { newsStyle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "mdbreact";

export default class History extends Component  {
  newsStyle={borderBottom: '10px solid #e0e0e0', marginBottom: '1.5rem'};

  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    };
  }

  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return(
      <Container style={{maxWidth: '80%'}} id="History">
        <h2 className="h1-responsive font-weight-bold my-5 text-left">Science vs Religion History</h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-left">
          One of the things that drove Canon Copernicus to delay publishing his life’s work until close to his death was fear. He was afraid of burning at the stake and the “Roman Catholic Index of Prohibited Books”. The rejection of his work extended beyond the Roman 
          Catholic congregation to include even Luther and Melanchthon. They disregarded it on the grounds of it being based in theory and on it reportedly being only introduced “as a hypothesis.”
          <br/><br/>
          The Catholic institution fostered an environment of  “censorship, Index, and Inquisition” rather than one “for intellectual understanding, effort, and acceptance.” Another famous scientist, Galileo, folded under the immense pressure by renouncing his idea of 
          heliocentricity as an “error.” This interaction between Galileo and the Church was not an isolated event, but “a symptomatic precedent” that damaged the relationship existing between science and religion. Scientists left the Catholic Church and the clash of science and religion 
          was set in stone. The Inquisition resulted in a lack of noteworthy Italian and Spanish scientists until the 1900s. 
          <br/><br/>
          From: The Beginning of All Things: Science and Religion by Hans Kung
        </p>
        <Row style={{marginBottom: '50px'}}>
          <Col lg="6" md="12">
            <div style={newsStyle}>
              <View hover rounded className="z-depth-1-half mb-4">
                <img className="img-fluid" src={require('./images/jp2.jpg')} alt="Sample image" />
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Pope Francis and John Paul II on Science and Religion</h3>
              <Button color="info" onClick={() => this.toggle(1)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)} size="fluid">
                <ModalHeader toggle={() => this.toggle(1)}>Pope Francis and John Paul II on Science and Religion</ModalHeader>
                <ModalBody className="text-left" style={{margin:'50px', textIndent:'50px'}}>
                  Pope Francis is aware of how there are external factors, such as Philosophy and Politics, that view the idea of the Creator as irrelevant and "dismiss as irrational how religion can contribute towards an integral ecology and the full development of humanity". He is then aware that through these factors 
                  people see that science and religion are then irreconcilable as religion can be seen as an obstacle in the development of humanity and society. However, he believes that in spite of the distinctive approaches of how science and religion perceive reality, both should enter into an intense dialogue that would 
                  benefit both science and religion. The common ground then, for science and religion to go hand-in-hand, is for taking of the environment. Not only should we take care of our nature, but also to take care of our fellow people, as the people are integral in engaging the dialogue between science and religion, that would lead to taking care of the common home of the people: Earth.
                  <br/>
                  On the other hand, John Paul II recognizes the Church and the Academy as the two very different major institutions within human civilization and world culture. Through the years, the two groups which may seem to have nothing common began to enter into a more open and dynamic interchange to find a 
                  shared goal, which in turn can lead to broader areas of shared understanding and concern. But the unity we seek from the two disciplines is not identity. Both shall preserve their own distinctiveness and become more itself through the dynamic exchange. One should just be a supplement to the lack of the 
                  other and vice versa, but they are not asked to become each other. 
                  <br/>
                  “Science can purify religion from error and superstition; religion can purify science from idolatry and false absolutes.”
                  <br/><br/>
                  From: Bergoglio, Jorge M. <i>Encyclical Letter Laudato Si’ of the Holy Father Francis on Care for Our Common Home.</i> Macao: Claterian Publications, 2015. 
                  <br/> Russell, Robert J., Stoeger, William R., Coyne, George V. <i>John Paul II On Science and Religion: Reflections on the New View from Rome.</i> New York: Vatican Observatory Publications, 1990.
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(1)}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>

          <Col lg="6" md="12">
            <div style={newsStyle}>
              <View hover rounded className="z-depth-1-half mb-4">
                <img className="img-fluid" src={require('./images/hindrances.jpg')} alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">What Hinders the Dialogue?</h3>
              <Button color="info" onClick={() => this.toggle(2)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} size="fluid">
                <ModalHeader toggle={() => this.toggle(2)}>Hindrances to Dialogue</ModalHeader>
                <ModalBody className="text-left" style={{margin:'50px', textIndent:'50px'}}>
                  Why do people find it difficult to reconcile ideas from science and religion? According to Mooney in his book Theology and Scientific Knowledge, it is due to several obstacles that prevent proper dialogue between both sides, and how they attempt to provide 
                  order to how humans experience their reality. This difficulty is also present due to one’s tendency to think of both sides as conflicting, rather than complementary. One such obstacle comes from past church authorities who meddled with scientific phenomena they could not 
                  comprehend from their theological standpoint. Examples of this include the Church’s resistance to Copernicus’ heliocentric system and Darwin’s theory of evolution. Another obstacle is due to religion’s tendency to undermine scientific findings and instead attribute 
                  everything to God, giving little interest to how He does it. Finally, the last obstacle comes from the science side; scientists are only willing to share ideas with the religious if they agree to meet them on “their own ground.” This means that scientists tend to use empirical data to 
                  explain the nature of humans, focusing primarily on the scientific aspect to explain God. Despite this, one quote from Holmes Rolston rings true: that the issue of the debate is not whether both sides are compatible, because science searches for the physical while religion 
                  searches for value and meaning. Instead, he says that their tension exists because humans seek for coherence of understanding when it is difficult to do so. 
                  <br/><br/>
                  From: Mooney, Christopher F. <i>Theology and Scientific Knowledge: Changing Models of God’s Presence in the World.</i> Notre Dame: University of Notre Dame Press, 1996.
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(2)}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Row>

        <Row style={{marginBottom: '50px'}}>
          <Col lg="6" md="12">
            <div style={newsStyle}>
              <View hover rounded className="z-depth-1-half mb-4">
                <img className="img-fluid" src={require('./images/Photo06.jpg')} alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Can Scientists be Religious?</h3>
              <Button color="info" onClick={() => this.toggle(3)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} size="fluid">
                <ModalHeader toggle={() => this.toggle(3)}>Scientists and Religion</ModalHeader>
                <ModalBody className="text-left" style={{margin:'50px', textIndent:'50px'}}>
                  Can scientists be religious? Based on some excerpts from C.L. Drawbridge’s The Religion of Scientists,  what initially seems like a clashing of both sides may actually serve a more comprehensive outlook in examining human life. One such excerpt mentioned that
                  science and religion appeal to different sides of human nature, with their respective languages and areas for influence; this renders conflict between both an aimless endeavor. Another mentioned that scientific men would take a more critical approach in accepting evidence, 
                  contributing greatly to the continuous process of belief. Finally, a professor of chemistry even mentioned that his scientific background does not dictate what he chooses to believe in. Based on an interview the group conducted with Dr. Vivian Panes, the way she values a 
                  personal relationship with God instead of giving priority to the religion she practices allowed her to enhance her career in the biological sciences, not contradict it. 
                  <br/><br/>From: Drawbridge, C.L. <i>The Religion of Scientists.</i> New York: The Macmillan Company, 1932.
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(3)}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>

          <Col lg="6" md="12">
            <div style={newsStyle}>
              <View hover rounded className="z-depth-1-half mb-4">
                <img className="img-fluid" src={require('./images/Photo13.jpg')} alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">A God for Science</h3>
              <Button color="info" onClick={() => this.toggle(4)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal4} toggle={() => this.toggle(3)} size="fluid">
                <ModalHeader toggle={() => this.toggle(4)}>A God for Science</ModalHeader>
                <ModalBody className="text-left" style={{margin:'50px', textIndent:'50px'}}>
                  It can be observed that the progress introduced to us by science has resulted in the disappearances of traditional items and methods. Science begins to rule over our age unchallenged. Our world view has expanded towards “the infinitesimally small (the discovery 
                  of the structure of the universe) and toward the infinitesimally small(the exploration of the secrets of matter by nuclear science).” Science has moved from existing in restricted domain of the eccentric to research teams. Diversity and collaboration are no features of this “great 
                  social and international phenomenon.” It plays an important role in uniting men. Science has given men access to powers to not only master the world, but the universe as well. 
                  <br/>
                  Along with this power comes the question on how the power is to be used. As seen in  bomb dropped in Hiroshima, a responsibility to safeguard our race’s future has been ushered. For specific fields such as embryology and genetics, the possibility of modifying our heredity becomes a realistic prospect. 
                  <br/>
                  Science today involves not only our life on this planet, but also how we relate to the rest of the universe around us. A dream existing generations prior is the ability to escape our planet’s pull of gravity. The person who is able to escape this pull  will be ushering a new time of freedom and unbounded access to the cosmos.
                  <br/><br/>by Jean-Marie Aubert, translated by Paul Barrett, O.F.M.Cap
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(4)}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
