import React, { Component } from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import Projects from "./Projects";
import './../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> 
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
