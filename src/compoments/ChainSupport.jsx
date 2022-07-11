import React from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png'
import iconCheck from '../client-side/earntoken/assets/images/icons/icon-Check.svg'
import earthBg from '../client-side/earntoken/assets/images/icons/earthBg.svg';
import rocket from '../client-side/earntoken/assets/images/icons/rocket.png';
import banner2 from '../images/banner/banner2.png';


export default function ChainSupport() {
    return (
        <div className="Multi_Chain_Support_Sect">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="Multi_Chain_Support_Left_Sect wow fadeInLeft" data-wow-delay="0.2s"
                            data-wow-duration="0.4s">
                            <div className="Multi_Chain_Support_img">
                                <img src={banner2} width="380" alt="img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Multi_Chain_Support_right_Sect wow fadeInRight" data-wow-delay="0.2s"
                            data-wow-duration="0.4s">
                            <div className="sec-inner align-items-center mb-30">
                                <div className="sec-heading">
                                    <div className="sub-inner mb-15">
                                        <span className="sub-title text-white text-glitch">Integration</span>
                                        <img className="heading-left-image" src={step} alt="Steps" />
                                    </div>
                                    <h2 className="title mb-0 text-warning text-glow">Multi-Chain Support</h2>
                                </div>
                                <div className="Multi_Chain_Support_right_Content">
                                    <p>
                                        FBS DeFi provides the foundational building layers for
                                        a new digital economy with following products: stable-coin, crypto/fiat,
                                        DEX, launchpad, lock liquidity and lock token and connecting crypto to the real
                                        world.
                                    </p>
                                    <div className="Multi_Chain_Support_right_list">
                                        <ul>
                                            <li><span><img
                                                src={iconCheck} alt='check' className="img-fluid" /></span>Binance Smart Chain</li>
                                            <li><span><img src={iconCheck} className="img-fluid" alt='check' /></span>Ethereum</li>
                                            <li><span><img src={iconCheck} className="img-fluid" alt='check' /></span>Polygon (Matic)</li>
                                        </ul>
                                        <ul className="m-0">
                                            <li><span><img
                                                src={iconCheck}
                                                className="img-fluid" alt='check' /></span>Avalanche</li>
                                            <li><span><img
                                                src={iconCheck}
                                                className="img-fluid" alt='check' /></span>Fuse</li>
                                            <li><span><img
                                                src={iconCheck}
                                                className="img-fluid" alt='check' /></span>OKEX Chain</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="OurPartnat_EathImg">
                <img src={earthBg} alt="img" className="img-fluid" />
            </div>
            <div className="RocketImgBW">
                <img src={rocket} alt="img" className="img-fluid" />
            </div>
        </div>
    )
}