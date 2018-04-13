import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import scrollToComponent from "react-scroll-to-component";
import "./../css/App.css";

class App extends Component {
  scrollDown = (scrollHref, time = 800) => {
    console.log("run");
    scrollToComponent(this[scrollHref], {
      ease: "outCirc",
      offset: -50,
      align: "top",
      duration: time
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar scrollDown={this.scrollDown} />
        <Header
          scrollDown={this.scrollDown}
          ref={section => {
            this.Header = section;
          }}
        />
        <Projects
          ref={section => {
            this.Projects = section;
          }}
        />
        <About
          ref={section => {
            this.About = section;
          }}
        />
        <Contact
          ref={section => {
            this.Contact = section;
          }}
        />
      </div>
    );
  }
}

export default App;
