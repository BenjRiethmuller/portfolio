import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="side-nav">
        <h3 className="nav-heading">BENJ RIETHMULLER</h3>
        <h3 className="nav-heading">DESIGN</h3>
        <a href="/">Jamable</a>
        <a href="/">Bikeabout</a>
        <a href="/">Leelo</a>
        <a href="/">Gravy Magazine</a>
        <h3 className="nav-heading">PHOTO</h3>
        <a href="/">CPHBER</a>
        <a href="/">Confide In Them</a>
        <a href="/">Let's Bean Out Tomorrow</a>
        <a href="/">Read The Bible</a>
        <h3 className="nav-heading">INFO</h3>
        <a href="/">About & Contact</a>
      </div>
    );
  }
}

export default App;
