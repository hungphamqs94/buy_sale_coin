import React from "react";
import dollar from '../client-side/earntoken/assets/images/icons/dollar-dollar-color.svg'
import rocket from '../client-side/earntoken/assets/images/icons/rocket-dynamic-color.svg'
import logoBsc from '../images/logo-partner/logo-bscscan-white.svg'
import buyToken1 from '../client-side/earntoken/assets/images/homeV2/buyTokenlogo1.png'
import buyToken2 from '../client-side/earntoken/assets/images/homeV2/buyTokenlogo2.png'
import buyToken3 from '../client-side/earntoken/assets/images/homeV2/buyTokenlogo3.png'
import buyToken4 from '../client-side/earntoken/assets/images/homeV2/buyTokenlogo4.png'
import banner7 from '../images/banner/banner7.png'
import step from '../client-side/earntoken/assets/images/icons/steps.png'
import Blockchain1 from '../client-side/earntoken/assets/images/icons/BlockChain1.png'
import Blockchain2 from '../client-side/earntoken/assets/images/icons/BlockChain2.png'
import Blockchain3 from '../client-side/earntoken/assets/images/icons/BlockChain3.png'
import Blockchain4 from '../client-side/earntoken/assets/images/icons/BlockChain4.png'
import Blockchain5 from '../client-side/earntoken/assets/images/icons/BlockChain5.png'
import Blockchain6 from '../client-side/earntoken/assets/images/icons/BlockChain6.png'
import UFO from '../client-side/earntoken/assets/images/homeV3/uFO.png';


export default function Banner() {
    return (
        <div id="sc-banner" className="sc_banner_V3 banner-bg position-relative">
                    <div className="container">
                        <div className="banner-content V3_BanerContent">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sc_banner_V3_left">
                                        <h2 className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s"
                                            style={{visibility: "visible", animationDuration: "0.6s", animationDelay: "0.4s", animationName: "fadeInUp"}}>
                                            <span className="text-glitch">XGA</span><br />is a decentralized application challage for earn, NFT, Metaver, financial
                                            <span>
                                                <img src={dollar}
                                                    alt="" className="img-fluid" />
                                            </span> infrastructure<br />
                                            on <span className="text-warning text-glow">BSC BEP20</span>
                                            <span>
                                                <img src={rocket}
                                                    alt="" className="img-fluid" />
                                            </span>
                                        </h2>
                                        <p className="lead text-glitch"
                                            style={{color:"#fff", fontFamily:' Bergern, Poppins,Sans-serif', fontSize:"15px", fontWeight:600, letterSpacing: '5.7px', marginBottom:'-7px', paddingLeft:'29px'}}>
                                            POWERED BY</p>
                                        <p className="lead"><img src={logoBsc} style={{width: '187px'}} alt='logo'/></p>
                                        <div className="gamfi_V2_hero_Btns wow fadeInUp" data-wow-delay="0.6s"
                                            data-wow-duration="0.8s"
                                            style={{visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                                            <a href="Exchange.html" className="readon white-btn hover-shape VIEW_Projects_Btn">
                                                <span className="btn-text">Join Seed Round</span>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </a>
                                            <a href="Saving.html" className="readon black-shape Apply_Project_Btn">
                                                <span className="btn-text">Join Saving</span>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </a>
                                        </div>
                                        <p style={{textAlign:'left', marginTop:'15px', color:'#fff', fontFamily:'Bergern,Poppins, Sans-serif', fontSize: '20px', fontWeight: 600, letterSpacing:0, width:'auto'}}>
                                            Join Our <span className="text-warning text-glow">300k+ Member</span> Communities!
                                            <a href="index.html" className="hero-social text-glow-only" target="_blank">
                                                <i className="icon-facebook"></i>
                                            </a>
                                            <a href="index.html" className="hero-social text-glow-only" target="_blank">
                                                <i className="icon-twitter"></i>
                                            </a>
                                            <a href="index.html" className="hero-social text-glow-only" target="_blank">
                                                <i className="icon-telegram"></i>
                                            </a>
                                        </p>
                                        <div className="buyTokenlogos">
                                            <h6>BUY TOKEN ON</h6>
                                            <ul>
                                                <li><a href="index.html"><img
                                                    src={buyToken1}
                                                    alt="logo" className="img-fluid" /></a></li>
                                                <li><a href="index.html"><img
                                                     src={buyToken2}
                                                    alt="logo" className="img-fluid" /></a></li>
                                                <li><a href="index.html"><img
                                                     src={buyToken3}
                                                    alt="logo" className="img-fluid" /></a></li>
                                                <li className="m-0"><a href="index.html"><img
                                                     src={buyToken4}
                                                    alt="logo" className="img-fluid" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sc_banner_V3_right">
                                        <div className="Animetion_Avater">
                                            <img src={banner7} width="450" alt="img" className="img-fluid" />
                                        </div>
                                        <ul>
                                            <li>
                                                <h3>Market Cap</h3>
                                                <h4 className="counter-number">$<span className="counter">490.88</span> M</h4>
                                            </li>
                                            <li>
                                                <h3>TVL</h3>
                                                <h4 className="counter-number">$<span className="counter">38.60</span> M</h4>
                                            </li>
                                            <li className="m-0">
                                                <h3>Fund Raised</h3>
                                                <h4 className="counter-number">$<span className="counter">160.48</span> M</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Multi_Block_Chains_Sect">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="Multi_Block_Chains_Left">
                                        <h3>Supported <span><img src={step} alt="Steps" className="img-fluid" /></span></h3>
                                        <h3>Multi - Block Chains</h3>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="Multi_Block_Chains_RightSect">
                                        <div className="gamfi-partner-section Multi_Block_Chains_Right">
                                            <div className="gamfi-partner-inner Multi_Block_Chains_RightContent">
                                                <div className="partner-image">
                                                    <a href="index.html"><img
                                                        src={Blockchain1}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain2}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain3}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain4}
                                                        alt="icon" className="img-fluid" /></a>
                                                </div>
                                                <div className="partner-image">
                                                    <a href="index.html"><img
                                                        src={Blockchain5}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain6}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain3}
                                                        alt="icon" className="img-fluid" /></a>
                                                    <a href="index.html"><img
                                                        src={Blockchain2}
                                                        alt="icon" className="img-fluid" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="redBordergradient"></span>
                        <span className="greenBordergradient"></span>
                    </div>
                    <div className="Ufo_Img wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2500ms"
                        style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '300ms', animationName: 'slideInLeft'}}>
                        <img src={UFO} alt="ufo" className="img-fluid" />
                    </div>
                </div>
    )
}
