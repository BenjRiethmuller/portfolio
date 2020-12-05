import React, { Component } from 'react';

import cit_05 from '../Img/Confide In Them/cit_05.jpg';
import cit_17 from '../Img/Confide In Them/cit_17.jpg';
import cit_22 from '../Img/Confide In Them/cit_22.jpg';
import cit_24 from '../Img/Confide In Them/cit_24.jpg';
import cit_26 from '../Img/Confide In Them/cit_26.jpg';
import cit_27 from '../Img/Confide In Them/cit_27.jpg';
import cit_29 from '../Img/Confide In Them/cit_29.jpg';
import cit_32 from '../Img/Confide In Them/cit_32.jpg';

class ConfideInThem extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Confide in Them</h3>
                    <h3 className="page-title">2017</h3>
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Photo series for STYLO Magazine Issue 11 - Perspective.</p>
                    <div className="page-info page-column">
                        <p className="page-subheading page-column">+ info</p>
                        <p className="info-text"> </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={cit_17} alt="" className="project-image"></img>
                    <img src={cit_22} alt="" className="project-image"></img>
                    <img src={cit_24} alt=""className="project-image"></img>
                    <img src={cit_26} alt="" className="project-image"></img>
                    <img src={cit_27} alt="" className="project-image"></img>
                    <img src={cit_29} alt="" className="project-image"></img>
                    <img src={cit_05} alt="" className="project-image"></img>
                    <img src={cit_32} alt="" className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default ConfideInThem;