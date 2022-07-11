import React from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png';
import tokenIcon from '../images/tokeniconfb.png';

export default function FormBuy() {
    return (
        <>
            <input type="hidden" id="isExchange" />
            <input type="hidden" id="tokenPrice" />
            <input type="hidden" id="bnbPrice" />
            <input type="hidden" id="transactionType" />
            <div className="gamfi-breadcrumbs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="breadcrumbs-area sec-heading">
                                <div className="sub-inner mb-15"><a className="breadcrumbs-link" href="index.html">FBS Sale</a> <span
                                    className="sub-title">Seed Round</span> <img className="heading-left-image"
                                        src={step} alt="StepsImage"/></div>
                                <h3 className="title mb-0">Seed Round</h3>
                            </div>
                        </div>
                        <div className="col-lg-7 breadcrumbs-form md-mt-30">
                            <div className="btn-area"><a className="readon black-shape" href="index.html" > <span
                                className="btn-text">Leaderboard</span> <span className="hover-shape1"></span> <span
                                    className="hover-shape2"></span> <span className="hover-shape3"></span> </a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="participat-information project-details-conent gamfi-about-secion pb-80 md-pb-50">
                <div className="container">
                    <div className="row pt-70" style={{display: "initial"}}>
                        <div className="col-lg-6 pr-25 md-pr-15" style={{display: "inline-block", marginTop: '20px'}}>
                            <div className="project-item">
                                <div className="project-info">
                                    <h4 className="mb-15"><img src={tokenIcon}
                                        style={{width:'40px', background:'#fff', borderRadius: '50%', padding:'5px'}} alt="iconToken"/> FBS DeFi - FB
                                    </h4>
                                    <h4 className="mb-15">Price <span className="buse text-warning">$<span
                                        className="tokenPrice">0.00</span></span></h4>
                                </div>
                                <div className="project-content border-bottom-2">
                                    <div id="sevenDays" className="StakeTabcontent">
                                        <div className="project-media mb-40">
                                            <ul className="project-listing">
                                                <li>Total Sale: <strong>25,000,000.00 FB</strong></li>
                                                <li>Min: <strong className="numberFormat">0.10</strong> <strong>BNB</strong></li>
                                                <li>Max: <strong className="numberFormat">50.00</strong> <strong>BNB</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-form-list">
                                    <h5 className="mb-18">Balance: <span id="CurrentBalance">0.00</span> BNB</h5>
                                    <div className="balance-form-area mb-27"><input className="numberFormat4" placeholder="0.1" id="txtAmount"/>
                                        <button className="max btnMax">MAX</button>
                                        <div className="white-shape-small approve" id="btnConfirm"><input type="button"
                                            value="Confirm"/> <span className="hover-shape1"></span> <span
                                                className="hover-shape2"></span> <span className="hover-shape3"></span></div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div id="sevenDays" className="StakeTabcontent">
                                        <div className="project-media mb-40">
                                            <ul className="project-listing">
                                                <li>Swap Value <span className="lblTotalUSD">$0.00</span></li>
                                                <li>Token Receive <span className="lblTotalToken">0.00 FB</span></li>
                                                <li>Address Receive <span className="lblAddressReceive">0x...</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-25 md-pl-15"></div>
                    </div>
                </div>
            </div>
        </>
    )
}