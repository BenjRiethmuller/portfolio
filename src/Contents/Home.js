import React, { Component } from 'react';

// import Homepage from '../Img/Home/Homepage.gif';
import homegif from '../Img/Home/homegif.gif';

class Home extends Component {

    render() {
        return(
            <div className="content-div">
                {/* <img src={Homepage} alt="" className="home-image"></img> */}
                <img src={homegif} alt="" className="home-image"></img>
            </div>
        )
    }
}

export default Home;