import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Contents/Home.js';
import BeanOut from './Contents/BeanOut.js';
import Bikeabout from './Contents/Bikeabout.js';
import ConfideInThem from './Contents/ConfideInThem.js';
import Cphber from './Contents/Cphber.js';
import Gravy from './Contents/Gravy.js';
import Info from './Contents/Info.js';
import Jamable from './Contents/Jamable.js';
import Leelo from './Contents/Leelo.js';
import ReadTheBible from './Contents/ReadTheBible.js';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/"> <Home /> </Route>
          <Route path="/lets-bean-out-tomorrow"> <BeanOut /> </Route>
          <Route path="/bikeabout"> <Bikeabout /> </Route>
          <Route path="/confide-in-them"> <ConfideInThem /> </Route>
          <Route path="/cphber"> <Cphber /> </Route>
          <Route path="/gravy-magazine"> <Gravy /> </Route>
          <Route path="/info"> <Info /> </Route>
          <Route path="/jamable"> <Jamable /> </Route>
          <Route path="/leelo-music"> <Leelo /> </Route>
          <Route path="/read-the-bible"> <ReadTheBible /> </Route>
        </div>
      </Router>
    );
  }
}

export default App;
