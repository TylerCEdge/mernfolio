import React from 'react';
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import Card from './components/card'
import Projects from './components/projects'
import Education from './components/education'
// import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className="container">

        <Jumbotron />

      </div>
      <div className="container">

        <Card />

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

export default App;
