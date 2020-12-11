import React, { Component } from 'react';

import cphber_12 from '../Img/CPHBER/cphber_12.jpg';
import cphber_14 from '../Img/CPHBER/cphber_14.jpg';
import cphber_15 from '../Img/CPHBER/cphber_15.jpg';
import cphber_16 from '../Img/CPHBER/cphber_16.jpg';
import cphber_18 from '../Img/CPHBER/cphber_18.jpg';
import cphber_20 from '../Img/CPHBER/cphber_20.jpg';
import cphber_22 from '../Img/CPHBER/cphber_22.jpg';
import cphber_23 from '../Img/CPHBER/cphber_23.jpg';
import cphber_26 from '../Img/CPHBER/cphber_26.jpg';
import cphber_27 from '../Img/CPHBER/cphber_27.jpg';
import cphber_28 from '../Img/CPHBER/cphber_28.jpg';
import cphber_29 from '../Img/CPHBER/cphber_29.jpg';
import cphber_30 from '../Img/CPHBER/cphber_30.jpg';
import cphber_35 from '../Img/CPHBER/cphber_35.jpg';

const toggleInfo = () => {
    const info = document.querySelector('.info-text');
    const text = document.querySelector('.toggle-button');

    if (text.innerHTML === '+ info') {
      info.style.display = "block";
      text.innerHTML = '- info';
    } else {
      info.style.display = "none";
      text.innerHTML = '+ info';
    }
  }

class Cphber extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">CPHBER</h3>
                    <h3 className="page-title">2018</h3>
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Photo series for STYLO Magazine Issue 13 - Power.</p>
                    <div className="page-info page-column">
                    <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text">
                            There was a buzz around the streets in the days leading up to the event. 
                            The rumble of wheels on concrete echoed as seas of skaters flocked the roads and footpaths of Berlin for the CPH Open’s final stop. 
                            The event moved across multiple locations each day in what felt like a marathon game of cat-and-mouse drawing an international crowd in it’s thousands. 
                            Just as one contest drew to a close, the crew of skaters and whoever else had a suitable means of transport were off on a wild goose chase to find the next spot. 
                            <br />
                            <br />
                            Amidst the chaos there was an enormous sense of community and belonging between all involved. 
                            Characterised by the people who make it, the CPH Open is a celebration of the city and it’s local culture, and what a celebration it was! 
                            As the sun went down after the final at Dog Shit Spot the masses were full of stoke on what had been an epic few days. 
                            Whether it was taking over a road, bridge, or an entire city block, the diverse crew all rolled together as one united power.</p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={cphber_14} alt="" className="project-image"></img>
                    <img src={cphber_15} alt="" className="project-image"></img>
                    <img src={cphber_27} alt="" className="project-image"></img>
                    <img src={cphber_28} alt="" className="project-image"></img>
                    <img src={cphber_18} alt="" className="project-image"></img>
                    <img src={cphber_16} alt=""className="project-image"></img>
                    <img src={cphber_20} alt="" className="project-image"></img>
                    <img src={cphber_12} alt="" className="project-image"></img>
                    <img src={cphber_22} alt="" className="project-image"></img>
                    <img src={cphber_23} alt="" className="project-image"></img>
                    <img src={cphber_26} alt="" className="project-image"></img>
                    <img src={cphber_30} alt="" className="project-image"></img>
                    <img src={cphber_35} alt="" className="project-image"></img>
                    <img src={cphber_29} alt="" className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default Cphber;