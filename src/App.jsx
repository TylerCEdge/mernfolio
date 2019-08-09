import React, { Component } from "react";
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import About from './components/about'
import Projects from './components/projects'
import Education from './components/education'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Jumbotron />
        </div>
        <div className="container">
          <About />
        </div>
        <div className="container">
          <Projects />
        </div>
        <div className="container">
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
