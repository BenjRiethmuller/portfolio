import React, { Component } from 'react';
import Navitem from '../NavItem/NavItem';
import './Navbar.css';

class Navbar extends Component {
   
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/" ></Navitem>
            <Navitem item="Jamable" tolink="/jamable" ></Navitem>
            <Navitem item="Bikeabout" tolink="/bikeabout"></Navitem>
            <Navitem item="Gravy Magazine" tolink="/gravy-magazine"></Navitem>
            <Navitem item="Leelo" tolink="/leelo-music"></Navitem>
            <Navitem item="CPHBER" tolink="/cphber" ></Navitem>
            <Navitem item="Confide In Them" tolink="/confide-in-them"></Navitem>
            <Navitem item="Let's Bean Out Tomorrow" tolink="/lets-bean-out-tomorrow"></Navitem>
            <Navitem item="Read The Bible" tolink="/read-the-bible"></Navitem>
            <Navitem item="Info" tolink="/info"></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar;