import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, View, Mask } from "mdbreact";
import { newsStyle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "mdbreact";
import { Navbar, NavbarBrand, NavbarNav, NavLink, NavItem, NavbarToggler, Collapse } from "mdbreact";
import { Card, CollapseHeader, CardBody } from "mdbreact";
import { Chart } from 'react-chartjs-2';
import YouTube from 'react-youtube';
//import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';
import Background from './images/Photo12.jpeg';
import kyle from './images/kyle.jpg';
import omeng from './images/omeng.jpg';
import sharon from './images/sharon.jpg';
import elmo from './images/elmo.jpg';
import nate from './images/nate.jpg';

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  render() {
    return(
      <Navbar color="indigo" dark expand="md" scrolling fixed="top">
        <NavbarBrand>
          <strong className="white-text">Theo 151</strong>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleCollapse}
        />
        <Collapse
          id="navbarCollapse3"
          isOpen={this.state.isOpen}
          navbar
        >
          <NavbarNav right>
            <NavItem>
              <NavLink to="#History">History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Survey">Survey</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Interview">Interview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Conclusion">Conclusion</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <section className="d-flex" style={image}>
        <h1 className="white-text font-weight-bold" style={{fontSize: '70px'}}>
          Observation<br/>&amp;<br/>Revelation
        </h1>
      </section>
    );
  }
}

class History extends Component  {
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
      <Container style={{maxWidth: '80%'}} id={'History'}>
        <h2 className="h1-responsive font-weight-bold my-5 text-left">Science vs Religion History</h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut eget dui non nisi iaculis maximus. Nunc et elit eleifend, 
          malesuada leo a, molestie orci. Curabitur pellentesque sollicitudin 
          nunc quis ornare. Praesent efficitur pellentesque arcu eget finibus. 
          Donec in lacinia lorem, id porta nibh. Duis imperdiet fringilla 
          mauris quis mattis. Interdum et malesuada fames ac ante ipsum primis 
          in faucibus. Quisque non lacinia ex. Donec aliquam, lectus sit amet 
          rhoncus lacinia, felis lorem imperdiet nisl, ut hendrerit elit nibh 
          et odio. Integer sit amet elit porttitor quam accumsan pretium eu 
          finibus tellus. Ut pretium massa sit amet felis semper posuere.
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
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Hindrances to Dialogue</h3>
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
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Scientists and Religion</h3>
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
                  Along with this power comes the question on how the power is to be used. As seen in  bomb dropped in Hirsoshima, a responsibility to safeguard our race’s future has been ushered. For specific fields such as embryology and genetics, the possibility of modifying our heredity becomes a realistic prospect. 
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

class SOSEContext extends Component {
  render() {
    return (
      <section className="Parallax" style={{paddingTop: '5px', paddingBottom: '5px'}}>
        <Mask overlay="stylish-strong">
          <h1 className="h1-responsive font-weight-bold my-5 text-center" style={{color: 'white', fontSize: '50px'}}>SOSE Context</h1>
          <p className="mx-auto mb-5 w-75 text-center" style={{color: 'white'}}>
            Our group surveyed 56 students from School of Science and Engineering through Google Forms to gather data and obtain a better understanding of how religion plays a role, if any, in the lives of those practicing hard sciences. 
            We have also interviewed a few SOSE professors to ask them how their faith and occupation go hand-in-hand.
          </p>
        </Mask>
      </section>
    );
  }
}

class Survey extends Component {
  componentDidMount() {
    // Pie chart
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var ctxP2 = document.getElementById("pieChart2").getContext('2d');
    var chart1 = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Catholic", "Non-Catholic Chirsitan", "Agnostic", "Atheist"],
            datasets: [
                {
                	label: 'Religion of SOSE students',
                    data: [48, 7, 2, 1],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
                }
            ]
        },
        options: {
        	title: {
        		fontSize: 36,
        		display: true,
        		text: 'What is your religion?'
        	},
            responsive: true
        }
    });
    var chart2 = new Chart(ctxP2, {
        type: 'pie',
        data: {
            labels: ["Practicing", "Non-Practicing"],
            datasets: [
                {
                	label: 'SOSE Practicing',
                    data: [28, 30],
                    backgroundColor: ["#F7464A", "#46BFBD"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
                }
            ]
        },
        options: {
        	title: {
        		fontSize: 36,
        		display: true,
        		text: 'Are you practicing or non-practicing your religion?'
        	},
            responsive: true
        }
    });
    //Bar Graph
    var ctxB = document.getElementById("barChart").getContext('2d');
    var ctxB2 = document.getElementById("barChart2").getContext('2d');
    var chart3 = new Chart(ctxB,{
    	type: 'bar',
    	data: {
    		labels: ["1", "2", "3", "4", "5"],
    		datasets: [{
    			label: '# of SOSE Students',
    			data: [5, 7, 8, 16, 22],
				backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"],
                borderWidth: 1
    		}]
    	},
    	options:{
    		title:{
    			fontSize: 36,
    			display: true,
    			text: 'Do you think science and religion can go hand-in-hand?'
    		},
    		responsive: true
    	}
    });
    var chart4 = new Chart(ctxB2,{
    	type: 'bar',
    	data: {
    		labels: ["1", "2", "3", "4", "5"],
    		datasets: [{
    			label: '# of SOSE Students',
    			data: [5, 7, 9, 12, 25],
				backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"],
                borderWidth: 1
    		}]
    	},
    	options:{
    		title:{
    			fontSize: 36,
    			display: true,
    			text: "My religious views do not affect the way I see science."
    		},
    		responsive: true
    	}
    });
	}
  render() {
    return(
      <Container style={{maxWidth: '75%'}} id={'Survey'}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">Survey Results</h1>
        	<canvas id="pieChart"></canvas>      	
        	<canvas id="pieChart2"></canvas>
        	<canvas id="barChart"></canvas>
        	<canvas id="barChart2"></canvas>
      </Container>
    );
  }
}

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: 'collapse1'
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  render() {
    const {collapseID} = this.state;
    return (
      <Container style={{maxWidth: '80%'}}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">Words from the SOSE Faculty</h1>
        <Card className="mt-3">
            <CollapseHeader onClick={this.toggleCollapse('collapse1')}>Collapsible Group Item #1
            </CollapseHeader>
            <Collapse id="collapse1" isOpen={collapseID}>
              <CardBody>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
          </Card>

          <Card>
            <CollapseHeader onClick={this.toggleCollapse('collapse2')}>Collapsible Group Item #2
            </CollapseHeader>
            <Collapse id="collapse2" isOpen={collapseID}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
          </Card>
      </Container>
    );
  }
}

/*class Questions extends Component {
  render() {
    const blockElements = {
      content: 'tabs-content',
      panel: 'tabs-panel',
      label: 'tabs-title'
    };

    return (
      <Tabbordion blockElements={blockElements} className="tabs" name="tabs">
        <TabPanel>
            <TabLabel>My title</TabLabel>
            <TabContent>
                <h2>Sample</h2>
                <p>Content</p>
            </TabContent>
        </TabPanel>
        <TabPanel>
            <TabLabel>Another title</TabLabel>
            <TabContent>
                <h2>Another Sample</h2>
                <p>Some other kind of content</p>
            </TabContent>
        </TabPanel>
    </Tabbordion>
    );
  }
}*/

class Faculty extends Component {
  render() {
    const opts = {
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Container style={{maxWidth: '80%'}} id={'Interview'}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">Words from the SOSE Faculty</h1>
        <Row style={{marginBottom: '50px'}}>
          <Col lg="6" md="12">
            <h3>Panes, Vivian A., Ph.D.</h3>
            <h4>Assistant Professor, Biology Dept</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut eget dui non nisi iaculis maximus. Nunc et elit eleifend, 
              malesuada leo a, molestie orci. Curabitur pellentesque sollicitudin 
            </p>
          </Col>

          <Col lg="6" md="12">
            <YouTube
              videoId="lI8yE1ynWLs"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
        </Row>

        <Row style={{marginBottom: '50px'}}>
          <Col lg="6" md="12">
            <h3>Ramos, Catherine L., M.S.</h3>
            <h4>Full Time Instructor, ECCE Dept</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut eget dui non nisi iaculis maximus. Nunc et elit eleifend, 
              malesuada leo a, molestie orci. Curabitur pellentesque sollicitudin 
            </p>
          </Col>

          <Col lg="6" md="12">
            <YouTube
              videoId="ygGb3N_Nko4"
              opts={opts}
              onReady={this._onReady}
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

class Team extends Component {
  render() {
    return (
      <footer className="d-flex" style={{width: "100%", alignItems: 'center', justifyContent:'center', backgroundColor:'#3F51B5'}}>
        <section>
          <h2 className="h1-responsive font-weight-bold my-5 white-text">Our amazing team</h2>
          <p className="w-responsive mx-auto mb-5 white-text" style={{maxWidth:'80%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

          <Row>
            <Col md="2" className="mb-md-0 mb-5 offset-md-1">
              <img src={sharon} className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold grey-text my-4">Hyunseo Ha</h4>
              <h6 className="text-uppercase grey-text mb-3">4 - BS Life Sciences</h6>
            </Col>

            <Col md="2" className="mb-md-0 mb-5">
              <img src={nate} className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold grey-text my-4">Nate Kibanoff</h4>
              <h6 className="text-uppercase grey-text mb-3">4 - BS Computer Science</h6>
            </Col>

            <Col md="2" className="mb-md-0 mb-5">
              <img src={elmo} className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold grey-text my-4">Elmo Lingad</h4>
              <h6 className="text-uppercase grey-text mb-3">4 - BS Computer Science</h6>
            </Col>

            <Col md="2" className="mb-md-0 mb-5">
              <img src={omeng} className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold grey-text my-4">Omeng Lopez</h4>
              <h6 className="text-uppercase grey-text mb-3">4 - BS Life Sciences</h6>
            </Col>

            <Col md="2" className="mb-md-0 mb-5">
              <img src={kyle} className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold grey-text my-4">Kyle Ordona</h4>
              <h6 className="text-uppercase grey-text mb-3">4 - BS Computer Engineering</h6>
            </Col>
          </Row>
        </section>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Title/>
        <History/>
        <SOSEContext/>
        <Survey/>
        <Faculty/>
        <Team/>
      </div>
    );
  }
}

var image = {
  width: "100%",
  height: "100vh",
  alignItems: 'center',
  justifyContent:'center',
  backgroundImage: `url(${Background})`
};

export default App;
