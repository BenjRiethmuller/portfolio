import React, { Component } from 'react';

import rtb_2 from '../Img/Read The Bible/rtb_2.jpg';
import rtb_7 from '../Img/Read The Bible/rtb_7.jpg';
import rtb_20 from '../Img/Read The Bible/rtb_20.jpg';
import rtb_30 from '../Img/Read The Bible/rtb_30.jpg';
import rtb_96 from '../Img/Read The Bible/rtb_96.jpg';
import rtb_63 from '../Img/Read The Bible/rtb_63.jpg';
import rtb_67 from '../Img/Read The Bible/rtb_67.jpg';
import rtb_69 from '../Img/Read The Bible/rtb_69.jpg';
import rtb_104 from '../Img/Read The Bible/rtb_104.jpg';
import rtb_110 from '../Img/Read The Bible/rtb_110.jpg';
import rtb_120 from '../Img/Read The Bible/rtb_120.jpg';
import rtb_68 from '../Img/Read The Bible/rtb_68.jpg';

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

class ReadTheBible extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Read The Bible</h3>
                    <h3 className="page-title">2015</h3>
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Photo essay documenting youth culture.</p>
                    <div className="page-info page-column">
                    <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text"> 'Read the Bible' is a photo essay following a cohort of adolescents in Perth, Western Australia. 
                        Shot throughout 2015, the social documentary intends to capture the influx of new experiences and coming to terms with a phase of life that often leaves adolescents alienated from the rest of society.<br />
                        <br /> Appeared in 'Autoluminescent' at the Perth Centre for Photography - A photography exhibition for the graduating students of Curting University.</p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={rtb_2} alt="" className="project-image"></img>
                    <img src={rtb_7} alt="" className="project-image"></img>
                    <img src={rtb_30} alt="" className="project-image"></img>
                    <img src={rtb_20}  alt=""className="project-image"></img>
                    <img src={rtb_63} alt="" className="project-image"></img>
                    <img src={rtb_67} alt="" className="project-image"></img>
                    <img src={rtb_68} alt="" className="project-image"></img>
                    <img src={rtb_69} alt="" className="project-image"></img>
                    <img src={rtb_96} alt="" className="project-image"></img>
                    <img src={rtb_104} alt="" className="project-image"></img>
                    <img src={rtb_110} alt="" className="project-image"></img>
                    <img src={rtb_120} alt="" className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default ReadTheBible;