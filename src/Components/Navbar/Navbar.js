import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navitem from '../NavItem/NavItem';
import './Navbar.css';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav>
            <ul>
            <Link className="site-header" to="/" >Benj <br /> Riethmuller</Link>
            {/* <Navitem item="Benj Riethmuller" tolink="/" ></Navitem> */}
            <h3 className="nav-header">DESIGN</h3>
            <Navitem item="Jamable" tolink="/jamable" activec={this.activeitem} ></Navitem>
            <Navitem item="Bikeabout" tolink="/bikeabout" activec={this.activeitem}></Navitem>
            <Navitem item="Gravy Magazine" tolink="/gravy-magazine" activec={this.activeitem}></Navitem>
            <Navitem item="Leelo" tolink="/leelo-music" activec={this.activeitem}></Navitem>
            <h3 className="nav-header">PHOTO</h3>
            <Navitem item="CPHBER" tolink="/cphber" activec={this.activeitem} ></Navitem>
            <Navitem item="Confide In Them" tolink="/confide-in-them" activec={this.activeitem}></Navitem>
            <Navitem item="Let's Bean Out Tomorrow" tolink="/lets-bean-out-tomorrow" activec={this.activeitem}></Navitem>
            <Navitem item="Read The Bible" tolink="/read-the-bible" activec={this.activeitem}></Navitem>
            <h3 className="nav-header">INFO</h3>
            <Navitem item="About & Contact" tolink="/info" activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar;