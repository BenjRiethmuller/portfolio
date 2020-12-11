import React, { Component } from 'react';

import j_1 from '../Img/Jamable/j_1.jpg';
import j_2 from '../Img/Jamable/j_2.jpg';
import j_3 from '../Img/Jamable/j_3.jpg';

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
                        <p className="page-subheading page-column toggle-button" onClick={toggleInfo}>+ info</p>
                        <p className="info-text"> Jamable is a platform for connecting musicians based off their favourite genres, instrument skill level and location.
                        <br /><br />
                        Featuring search functionality and messaging, the app eases the pain of finding other musicians to jam with while the social feed makes it easy to share photos, videos and recordings from jam sessions. 
                        <br /><br />
                        Tech: Ruby on Rails, HTML5, SCSS, Javascript, Heroku, PostgreSQL DB, PG Search</p> 
                        {/* <p className="info-text">Featuring search functionality and messaging, the app eases the pain of finding other musicians to jam with while the social feed makes it easy to share photos, videos and recordings from jam sessions.</p> */}
                        {/* <p className="info-text">Tech: Ruby on Rails, HTML5, SCSS, Javascript, Heroku, PostgreSQL DB, PG Search</p> */}
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