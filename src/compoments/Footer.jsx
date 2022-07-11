import React from "react";
import stepTwo from "../client-side/earntoken/assets/images/icons/steps2.png"
import step from "../client-side/earntoken/assets/images/icons/steps.png"
import tokenLogo from "../images/tokenlogo.png"

export default function Footer() {
    return (
        <div className="gamfi-footer-section">
                    <div className="footer-area">
                        <div className="container">
                            <div className="sec-heading text-center">
                                <div className="sub-inner mb-52 mb-mb-30">
                                    <img className="heading-right-image" src={stepTwo}
                                        alt="Steps" />
                                    <span className="sub-title white-color">Find us on Social</span>
                                    <img className="heading-left-image" src={step}
                                        alt="Steps" />
                                </div>
                            </div>
                            <div className="footer-listing text-center mb-100 md-mb-70 xs-mb-50">
                                <ul className="footer-icon-list">
                                    <li><a href="index.html"><i className="icon-twitter"></i></a></li>
                                    <li><a href="index.html"><i className="icon-telegram"></i></a></li>
                                    <li><a href="index.html"><i className="icon-medium"></i></a></li>
                                    <li><a href="index.html"><i className="icon-discord"></i></a></li>
                                    <li><a href="index.html"><i className="icon-linkedin"></i></a></li>
                                    <li><a href="index.html"><i className="icon-instagram"></i></a></li>
                                    <li><a href="index.html"><i className="icon-facebook"></i></a></li>
                                </ul>
                            </div>
                            <div className="footer-logo text-center mb-45">
                                <img src={tokenLogo} width="350" alt="Footer-logo" />
                            </div>
                            <div className="footer-mainmenu text-center mb-20">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="NFTMarketplace.html">NFT Market</a></li>
                                    <li><a href="Exchange.html">FBS Sale</a></li>
                                    <li><a href="Saving.html">Saving</a></li>
                                    <li><a href="index.html">Staking</a></li>
                                    <li><a href="index.html">FBS Pool</a></li>
                                    <li><a href="index.html">Terms of Service</a></li>
                                    <li><a href="index.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="copyright-area text-center mb-0">
                                <div className="dsc mb-37 md-mb-25">
                                    Copyright © 2022. All Rights Reserved by
                                    <a target="_blank" className="gafi" href="index.html">FBS DeFi</a>
                                </div>
                            </div>
                            <div className="scrollup text-center">
                                <a href="#gamfi-header"><i className="icon-arrow_up"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}