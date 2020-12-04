import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navitem from '../NavItem/NavItem';
import './Navbar.css';

class Navbar extends Component {
   
    render() {
        return (
            <nav>
            <ul>
            <Link className="site-header" to="/" >Benj <br /> Riethmuller</Link>
            {/* <Navitem item="Benj Riethmuller" tolink="/" ></Navitem> */}
            <h3 className="nav-header">DESIGN</h3>
            <Navitem item="Jamable" tolink="/jamable" ></Navitem>
            <Navitem item="Bikeabout" tolink="/bikeabout"></Navitem>
            <Navitem item="Gravy Magazine" tolink="/gravy-magazine"></Navitem>
            <Navitem item="Leelo" tolink="/leelo-music"></Navitem>
            <h3 className="nav-header">PHOTO</h3>
            <Navitem item="CPHBER" tolink="/cphber" ></Navitem>
            <Navitem item="Confide In Them" tolink="/confide-in-them"></Navitem>
            <Navitem item="Let's Bean Out Tomorrow" tolink="/lets-bean-out-tomorrow"></Navitem>
            <Navitem item="Read The Bible" tolink="/read-the-bible"></Navitem>
            <h3 className="nav-header">INFO</h3>
            <Navitem item="About & Contact" tolink="/info"></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar;