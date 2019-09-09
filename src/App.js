import React, { Component } from "react";
import "./App.css";
import "react-light-accordion/demo/css/index.css";
import NavBar from "./NavBar";
import Title from "./Title";
import History from "./History";
import SOSEContext from "./SOSEContext";
import Survey from "./Survey";
import Questions from "./Questions";
import Faculty from "./Faculty";
import Team from "./Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Title />
        <History />
        <SOSEContext />
        <Survey />
        <Questions />
        <Faculty />
        <Team />
      </div>
    );
  }
}

export default App;
