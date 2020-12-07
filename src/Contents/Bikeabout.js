import React, { Component } from 'react';

import b_1 from '../Img/Bikeabout/b_1.jpg';
import b_2 from '../Img/Bikeabout/b_2.jpg';
import b_3 from '../Img/Bikeabout/b_3.jpg';
import b_4 from '../Img/Bikeabout/b_4.jpg';
import b_5 from '../Img/Bikeabout/b_5.jpg';

class Bikeabout extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">Bikeabout</h3>
                    {/* <h3 className="page-title">2017</h3> */}
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                    <p className="page-subheading page-column">Bike rental app.</p>
                    <div className="page-info page-column">
                        <p className="page-subheading page-column">+ info</p>
                        <p className="info-text"> </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="page-content">
                    <img src={b_1} alt="" className="project-image"></img>
                    <img src={b_2} alt="" className="project-image"></img>
                    <img src={b_3} alt=""className="project-image"></img>
                    <img src={b_4} alt="" className="project-image"></img>
                    <img src={b_5} alt="" className="project-image"></img>
                </div>
            </div>
        )
    }
}

export default Bikeabout;