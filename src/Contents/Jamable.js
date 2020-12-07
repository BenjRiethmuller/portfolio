import React, { Component } from 'react';

import j_1 from '../Img/Jamable/j_1.jpg';
import j_2 from '../Img/Jamable/j_2.jpg';
import j_3 from '../Img/Jamable/j_3.jpg';


class Jamable extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Jamable</h3>
                    {/* <h3 className="page-title">2017</h3> */}
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">App for finding a musician.</p>
                    <div className="page-info page-column">
                        <p className="page-subheading page-column">+ info</p>
                        <p className="info-text"> </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={j_1} alt="" className="project-image"></img>
                    <img src={j_2} alt="" className="project-image"></img>
                    <img src={j_3} alt=""className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default Jamable;