import React, { Component } from 'react';
import './Contents.css';

import lbot_03 from '../Img/Let\'s Bean Out Tomorrow/lbot_03.jpg';
import lbot_05 from '../Img/Let\'s Bean Out Tomorrow/lbot_05.jpg';
import lbot_08 from '../Img/Let\'s Bean Out Tomorrow/lbot_08.jpg';
import lbot_09 from '../Img/Let\'s Bean Out Tomorrow/lbot_09.jpg';
import lbot_16 from '../Img/Let\'s Bean Out Tomorrow/lbot_16.jpg';
import lbot_17 from '../Img/Let\'s Bean Out Tomorrow/lbot_17.jpg';
import lbot_19 from '../Img/Let\'s Bean Out Tomorrow/lbot_19.jpg';
import lbot_22 from '../Img/Let\'s Bean Out Tomorrow/lbot_22.jpg';
import lbot_24 from '../Img/Let\'s Bean Out Tomorrow/lbot_24.jpg';
import lbot_26 from '../Img/Let\'s Bean Out Tomorrow/lbot_26.jpg';
import lbot_31 from '../Img/Let\'s Bean Out Tomorrow/lbot_31.jpg';
import lbot_32 from '../Img/Let\'s Bean Out Tomorrow/lbot_32.jpg';
import lbot_34 from '../Img/Let\'s Bean Out Tomorrow/lbot_34.jpg';

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

class BeanOut extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Let's Bean Out Tomorrow</h3>
                    <h3 className="page-title">2016</h3>
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Photo series for STYLO Magazine Issue 10 - Growth.</p>
                    <div className="page-info page-column">
                        <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text"> </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={lbot_31} alt="" className="project-image"></img>
                    <img src={lbot_17} alt="" className="project-image"></img>
                    <img src={lbot_26} alt="" className="project-image"></img>
                    <img src={lbot_24} alt="" className="project-image"></img>
                    <img src={lbot_03} alt="" className="project-image"></img>
                    <img src={lbot_08} alt=""className="project-image"></img>
                    <img src={lbot_16} alt="" className="project-image"></img>
                    <img src={lbot_34} alt="" className="project-image"></img>
                    <img src={lbot_05} alt="" className="project-image"></img>
                    <img src={lbot_32} alt="" className="project-image"></img>
                    <img src={lbot_09} alt="" className="project-image"></img>
                    <img src={lbot_19} alt="" className="project-image"></img>
                    <img src={lbot_22} alt="" className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default BeanOut;