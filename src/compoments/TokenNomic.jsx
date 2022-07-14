import React from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png'

export default function TokenNomic() {
    return (
        <div className="Tokenomics_section main-project-area">
            <div className="container">
                <div className="sec-inner align-items-center mb-30">
                    <div className="sec-heading">
                        <div className="sub-inner mb-15">
                            <span className="sub-title text-glitch text-white">statistics</span>
                            <img className="heading-left-image" src={step}
                                alt="Steps" />
                        </div>
                        <h2 className="title mb-0 text-warning text-glow">XGA Tokenomics</h2>
                    </div>
                    <div className="TokenomicsContents">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="TokenomicsContentsLeft wow fadeInLeft" data-wow-delay="0.2s"
                                    data-wow-duration="0.4s">
                                    <div className="TokenomicsListSect">
                                        <ul>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Token Name</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>XGAGE</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Token Symbol</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>XGA</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Decimals</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>18</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Max Supply</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>100,000,000</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Token Platform</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>BSC BEP20</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4>Token Standard</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>BEP20</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="icon-muines-custom" style={{marginTop: 0}}></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 style={{float: 'left'}}>Token Address</h4>
                                                    <h5 className="counter-number" style={{float: 'left'}}>
                                                        <a href="https://bscscan.com/token/0x85DFF81BEd5b37c2462AdAF460df971BE5ebD105"
                                                            className="text-warning text-glow">
                                                            0x0Ed173E3F92a8bb4c0F4781600875fBc1c98bb05
                                                        </a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="chart-container">
                                    <div className="custom-display">
                                        <div id="chartdiv"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="TokenomicsContentsLeft wow fadeInLeft" data-wow-delay="0.2s"
                                    data-wow-duration="0.4s">
                                    <h4 className="counter-number mb-2">Total Supply : <span
                                        className="counter text-success">100,000,000</span></h4>
                                    <h4 className="counter-number text-danger">Seed Round : $<span
                                        className="counter text-glow">0.1</span></h4>
                                    <div className="TokenomicsListSect">
                                        <ul>
                                            <li>
                                                <span className="Marketing"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-white text-glitch">Marketing</h4>
                                                    <h5 className="counter-number">3,000,000 | <span
                                                        className="counter">3</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="SeedRound"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-SeedRound">Seed Round</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="AngelSale"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-AngelSale">Angel Round</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="PrivateSale"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-PrivateSale">Private Round</h4>
                                                    <h5 className="counter-number">15,000,000 | <span
                                                        className="counter">15</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="PublishSale"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-PublishSale">Publish Round</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="Saving"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-Saving">Saving</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul style={{ marginLeft: '15px' }}>
                                            <li>
                                                <span className="Staking"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-Staking">Staking</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="Staking"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-white text-glitch">Airdrop</h4>
                                                    <h5 className="counter-number">5,000,000 | <span
                                                        className="counter">5</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="Capital"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-Capital">Ecosytem</h4>
                                                    <h5 className="counter-number">35,000,000 | <span
                                                        className="counter">35</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="TeamDev"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-TeamDev">Team</h4>
                                                    <h5 className="counter-number">10,000,000 | <span
                                                        className="counter">10</span>%</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="AdvisorExperts"></span>
                                                <div className="TokenomicsList_text">
                                                    <h4 className="text-glitch text-AdvisorExperts">Advisor & Experts</h4>
                                                    <h5 className="counter-number">12,000,000 | <span
                                                        className="counter">12</span>%</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}