import React, { Component } from 'react';

import l_1 from '../Img/Leelo/l_1.jpg';
import l_2 from '../Img/Leelo/l_2.jpg';
import l_3 from '../Img/Leelo/l_3.jpg';

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

class Leelo extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Leelo</h3>
                    {/* <h3 className="page-title">2017</h3> */}
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Album artwork for Leelo.</p>
                    <div className="page-info page-column">
                    <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text"> </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={l_1} alt="" className="project-image"></img>
                    <img src={l_2} alt="" className="project-image"></img>
                    <img src={l_3} alt=""className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default Leelo;