import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, View, Avatar } from "mdbreact";
import { newsStyle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "mdbreact";
import { Navbar, NavbarBrand, NavbarNav, NavLink, NavItem, NavbarToggler, Collapse } from "mdbreact";
import { Card, CollapseHeader, CardBody } from "mdbreact";
import { Chart } from 'react-chartjs-2';
import YouTube from 'react-youtube';
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
              <NavLink to="#!">Conclusion</NavLink>
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
        <h1 className="white-text font-weight-bold" style={{fontSize: '50px'}}>
          Studying the Effects of Science <br/>on Religious Beliefs of <br/>Scientifically-Inclined People
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
                <img className="img-fluid" src={require('./images/jp2.jpg')} alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">John Paul II on Science and Religion</h3>
              <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
              <Button color="info" onClick={() => this.toggle(1)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)} size="fluid">
                <ModalHeader toggle={() => this.toggle(1)}>John Paul II on Science and Religion</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget dui non nisi iaculis maximus. Nunc et elit eleifend, malesuada leo a, molestie orci. Curabitur pellentesque sollicitudin nunc quis ornare. Praesent efficitur pellentesque arcu eget finibus. Donec in lacinia lorem, id porta nibh. Duis imperdiet fringilla mauris quis mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque non lacinia ex. Donec aliquam, lectus sit amet rhoncus lacinia, felis lorem imperdiet nisl, ut hendrerit elit nibh et odio. Integer sit amet elit porttitor quam accumsan pretium eu finibus tellus. Ut pretium massa sit amet felis semper posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  <br/> <br/>
                  Mauris sit amet rutrum lorem, a sagittis enim. Donec condimentum ligula ac enim vehicula viverra. Quisque sed libero accumsan, porttitor ex ac, convallis mauris. Nunc a magna condimentum, ultricies diam sit amet, pellentesque orci. Integer rutrum odio id nisl tristique, eu bibendum nisi efficitur. Nulla facilisi. Sed massa mi, fringilla sit amet luctus sed, imperdiet eu est. Suspendisse sodales sed felis eget ornare. Curabitur laoreet, felis et bibendum viverra, est elit egestas tellus, at placerat nisi nunc vitae leo. In hac habitasse platea dictumst. Nulla ut metus efficitur, lobortis velit et, faucibus libero. Curabitur volutpat et dui ut ultrices. Phasellus et ligula vehicula risus sollicitudin sagittis. Praesent sodales tellus nunc, nec gravida ipsum tempor rhoncus.
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
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Article Title</h3>
              <p className="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
              <Button color="info" onClick={() => this.toggle(2)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} size="fluid">
                <ModalHeader toggle={() => this.toggle(2)}>Article title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Article Title</h3>
              <p className="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
              <Button color="info" onClick={() => this.toggle(3)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} size="fluid">
                <ModalHeader toggle={() => this.toggle(3)}>Modal title</ModalHeader>
                <ModalBody>
                  Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
              </View>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">Article Title</h3>
              <p className="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
              <Button color="info" onClick={() => this.toggle(3)}>Read more</Button>
              {/* MODAL */}
              <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} size="fluid">
                <ModalHeader toggle={() => this.toggle(3)}>Modal title</ModalHeader>
                <ModalBody>
                  Lipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => this.toggle(3)}>Close</Button>
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
        <h1 className="h1-responsive font-weight-bold my-5 text-center" style={{color: 'white', fontSize: '50px'}}>SOSE Context</h1>
        <p className="mx-auto mb-5 w-75 text-center" style={{color: 'white'}}>
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
                    data: [45, 7, 2, 1],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
                }
            ]
        },
        options: {
        	title: {
        		fontSize: 48,
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
                    data: [25, 30],
                    backgroundColor: ["#F7464A", "#46BFBD"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
                }
            ]
        },
        options: {
        	title: {
        		fontSize: 48,
        		display: true,
        		text: 'Are you practicing or non-practicing your religion?'
        	},
            responsive: true
        }
    });
	}
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">Survey Results</h1>
        <div class="pie-chart-container">
        	<canvas id="pieChart"></canvas>
        </div>
        <div class="pie-chart-container">
        	<canvas id="pieChart2"></canvas>
        </div>
      </Container>
    );
  }
}

/*class Response extends Component {
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
      <Container style={{maxWidth: '80%'}}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">Words from the SOSE Faculty</h1>
        <Row style={{marginBottom: '50px'}}>
          <Col lg="6" md="12">
            <h3>Panes, Vivian A., Ph.D.</h3>
            <h4>Full Time Instructor, Biology Dept</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut eget dui non nisi iaculis maximus. Nunc et elit eleifend, 
              malesuada leo a, molestie orci. Curabitur pellentesque sollicitudin 
            </p>
          </Col>

          <Col lg="6" md="12">
            <YouTube
              videoId="gFflmvcXHEk"
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
              <h6 className="text-uppercase grey-text mb-3">4 - BS Life Science</h6>
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
