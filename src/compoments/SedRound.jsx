import React from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png'
import iconCheck from '../client-side/earntoken/assets/images/icons/icon-Check.svg'
import One from '../client-side/earntoken/assets/images/icons/One.svg'
import Two from '../client-side/earntoken/assets/images/icons/two.svg'
import Three from '../client-side/earntoken/assets/images/icons/three.svg'
import lock from '../client-side/earntoken/assets/images/icons/locker-dynamic-color.png';
import earthBg from '../client-side/earntoken/assets/images/icons/earthBg.svg'

export default function SedRound() {
    return (
        <div className="How_to_Participate_Sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.4s">
                                <div className="How_to_Participate_Left">
                                    <div className="sec-heading">
                                        <div className="sub-inner mb-15">
                                            <span className="sub-title text-white text-glitch">3 EASY STEPS</span>
                                            <img className="heading-left-image" src={step} alt="Steps" />
                                        </div>
                                        <h2 className="title text-warning text-glow">Seed Round Policy</h2>
                                    </div>
                                    <div className="How_to_Participate_Left_Contnet">
                                        <div className="Multi_Chain_Support_right_list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <img src={iconCheck} alt='logo' className="img-fluid" />
                                                    </span><strong>Price:</strong> <strong className="text-danger ml-5">
                                                        $0.02</strong>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={iconCheck} alt='logo' className="img-fluid" />
                                                    </span><strong>Total Sale:</strong> <strong className="text-success ml-5">
                                                        25,000,000</strong>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={iconCheck} alt='logo' className="img-fluid" />
                                                    </span><strong>Min Buy:</strong> <strong className="text-warning ml-5"> 0.1
                                                        BNB</strong>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={iconCheck} alt='logo' className="img-fluid" />
                                                    </span><strong>Max Buy:</strong> <strong className="text-warning ml-5"> 50
                                                        BNB</strong>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={iconCheck} alt='logo' className="img-fluid" />
                                                    </span><strong>Supports payment by BNB of BEP20 network on Metamask wallet
                                                        or Trust wallet</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="How_to_Participate_Left_Btn">
                                            <a className="view-more black-shape" href="Exchange.html">
                                                <span className="btn-text">Join Now</span>
                                                <i className="icon-arrow_right"></i>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="How_to_Participate_right_Contnet">
                                    <div className="How_to_Participate_right_Card How_to_Participate_right_Card1 wow fadeInRight"
                                        data-wow-delay="0.2s" data-wow-duration="0.4s">
                                        <div className="How_to_Participate_right_Card_number">
                                            <img src={One} alt="img"
                                                className="img-fluid" />
                                        </div>
                                        <div className="How_to_Participate_right_CardText">
                                            <h4>Connect Wallet</h4>
                                            <p>The system supports payment by BNB of BEP20 network on metamask wallet or trust
                                                wallet</p>
                                        </div>
                                    </div>
                                    <div className="How_to_Participate_right_Card How_to_Participate_right_Card2 wow fadeInRight"
                                        data-wow-delay="0.3s" data-wow-duration="0.5s">
                                        <div className="How_to_Participate_right_Card_number">
                                            <img src={Two} alt="img"
                                                className="img-fluid" />
                                        </div>
                                        <div className="How_to_Participate_right_CardText">
                                            <h4>Confirm Amount</h4>
                                            <p>Enter the amount of BNB to convert to FB and click confirm</p>
                                        </div>
                                    </div>
                                    <div className="How_to_Participate_right_Card How_to_Participate_right_Card3 wow fadeInRight"
                                        data-wow-delay="0.4s" data-wow-duration="0.6s">
                                        <div className="How_to_Participate_right_Card_number">
                                            <img src={Three} alt="img"
                                                className="img-fluid" />
                                        </div>
                                        <div className="How_to_Participate_right_CardText">
                                            <h4>Verify Transaction</h4>
                                            <p>The system will send transactions to your wallet to request confirmation of
                                                payment information, after completing the system will transfer the FB token to
                                                your wallet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lockerImg">
                            <img src={lock} alt="img"
                                className="img-fluid" />
                        </div>
                    </div>
                    <div className="moon_imgBg">
                        <img src={earthBg} alt="img" className="img-fluid" />
                    </div>
                </div>
    )
}