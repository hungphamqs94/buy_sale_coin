import React from "react";
import stepTwo from '../client-side/earntoken/assets/images/icons/steps2.png'
import step from '../client-side/earntoken/assets/images/icons/steps.png'
import teamImage from '../client-side/earntoken/assets/images/team/team-image.png'
import teamImageTwo from '../client-side/earntoken/assets/images/team/team-image2.png'
import teamImageThree from '../client-side/earntoken/assets/images/team/team-image3.png'
import teamImageFour from '../client-side/earntoken/assets/images/team/team-image4.png'
import teamImageFive from '../client-side/earntoken/assets/images/team/team-image5.png'
import teamImageSix from '../client-side/earntoken/assets/images/team/team-image6.png'
import teamImageSeven from '../client-side/earntoken/assets/images/team/team-image7.png'
import teamImageEight from '../client-side/earntoken/assets/images/team/team-image8.png'

export default function Team() {
    return (
        <div className="gamfi-team-section pt-115 pb-85 md-pt-75 md-pb-42">
                    <div className="container">
                        <div className="sec-heading text-center mb-55">
                            <div className="sub-inner  mb-15">
                                <img className="heading-left-image" src={stepTwo}
                                    alt="Steps" />
                                <span className="ml-10 mr-10 sub-title text-white text-glitch">ADVISORS</span>
                                <img className="heading-right-image" src={step}
                                    alt="Steps" />
                            </div>
                            <h2 className="title text-warning text-glow">Team Members</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImage} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Berneice Tran</a></h4>
                                    <div className="dsc text-warning text-glow">Founder</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                        <li><a href="index.html"><i className="icon-facebook"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageTwo} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Genaro Nadel</a></h4>
                                    <div className="dsc text-warning text-glow">CEO</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageThree} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Lynnette Wilkes</a></h4>
                                    <div className="dsc text-warning text-glow">CEO</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageFour} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Claudia Hicks</a></h4>
                                    <div className="dsc text-warning text-glow">Marketing Manager</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageFive} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Louis Baker</a></h4>
                                    <div className="dsc text-warning text-glow">Poject Manager</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageSix} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Nathan Bean</a></h4>
                                    <div className="dsc text-warning text-glow">Software Engineer</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageSeven} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">R. Hawley</a></h4>
                                    <div className="dsc text-warning text-glow">Software Engineer</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                        <li><a href="index.html"><i className="icon-facebook"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item text-center active-shape">
                                    <img src={teamImageEight} alt="Team" />
                                    <h4 className="team-title mb-8 text-glitch"><a href="index.html">Pedro Carrera</a></h4>
                                    <div className="dsc text-warning text-glow">Software Engineer</div>
                                    <ul className="team-icon-list">
                                        <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                    </ul>
                                    <span className="border-shadow shadow-1"></span>
                                    <span className="border-shadow shadow-2"></span>
                                    <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}