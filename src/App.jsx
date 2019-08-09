import React, { Component } from "react";
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import About from './components/about'
import Projects from './components/projects'
import Wrapper from './components/wrapper'
import Education from './components/education'
import Card from './components/card'
import cards from './cards.json'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards
    };
  }

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
            <Wrapper>
            {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
          />
          ))}
          </Wrapper>
        </div>

        <div className="container">
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
