import React, { Component } from 'react';

import b_1 from '../Img/Bikeabout/b_1.jpg';
import b_2 from '../Img/Bikeabout/b_2.jpg';
import b_3 from '../Img/Bikeabout/b_3.jpg';
import b_4 from '../Img/Bikeabout/b_4.jpg';
import b_5 from '../Img/Bikeabout/b_5.jpg';

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
                        <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text">Bikeabout is an online bike sharing marketplace to help travellers rent bikes and explore their destinations like a local.
                        <br /><br />
                        A city search function and interactive map gives users the ability to find a bike in their area, while the dashboard allows them manage their listed bikes, upcoming bookings and leave reviews.
                        Tech: Ruby on Rails, HTML5, SCSS, Javascript, Heroku, PostgreSQL DB, PG Search</p>
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