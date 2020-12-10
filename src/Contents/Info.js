import React, { Component } from 'react';

import onTheMountain from '../Img/About/onTheMountain.jpg';

class Info extends Component {

    render() {
        return(
            <div className="content-div">
                {/* TITLE AND DATE */}
                <div className="page-header">
                    <h3 className="page-title">About & Contact</h3>
                </div>

                {/* CAPTION AND + INFO */}
                <div className="page-description">
                <img src={onTheMountain} alt="" className="about-image page-column"></img>
                <div className="page-info page-column">
                    <p className="page-subheading page-column">ABOUT</p>
                    <p className="info-text">Benj Riethmuller is an Australian multi-disciplinary artist working in digital & print design, photography, web development and everything in-between.</p>
                    <p className="info-text">After graduating with a degree in Graphic Design & Photography from Curtin University, Benj spent time in both London and Berlin before returning to Perth, where he currently resides.</p>
                    <p className="info-text">In 2018 he co-founded the art publication Gravy Magazine.</p>
                
                    <p className="page-subheading page-column">AREAS OF EXPERTISE</p>
                    <ul className="info-text">
                        <li>Visual & Graphic Design</li>
                        <li>UX & UI Design</li>
                        <li>Front-End & Back-End Web Development</li>
                    </ul>
                
                    <p className="page-subheading page-column">CONTACT</p>
                    <a className="email-link" href="mailto:benjriethmuller@gmail.com?subject=Hey Benj">benjriethmuller@gmail.com</a> <br />
                    <br />
                    <a className="social-link" href="https://instagram.com/benjriethmuller">INSTAGRAM</a> <br />
                    <br />
                    <a className="social-link" href="https://github.com/BenjRiethmuller">GITHUB</a> <br />
                </div>
                </div>
            </div>
        )
    }
}

export default Info;