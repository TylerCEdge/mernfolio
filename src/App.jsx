import React, { Component } from "react";
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import About from './components/about'
import Projects from './components/projects'
import Education from './components/education'
import Contact from './components/contact'
import Carousel from './components/carousel'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container first">
          <Jumbotron />
        </div>
        {/* <div className="container">
          <Carousel />
        </div> */}
        <div className="container">
          <About />
        </div>
        <div className="container">
          <Projects />
        </div>
        <div className="container">
          <Education />
        </div>
        <div className="container">
          <Contact />
        </div>
      </div>
    );
  }
}