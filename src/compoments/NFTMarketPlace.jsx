import React from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png';
import previous1 from '../client-side/earntoken/assets/images/project/previous-image.png'
import previous2 from '../client-side/earntoken/assets/images/project/previous-image2.png'
import previous3 from '../client-side/earntoken/assets/images/project/previous-image3.png'
import FBSC0 from '../images/nft-item/FBSC0.png'
import tokeniconfb from '../images/tokeniconfb.png'
import FBSC1 from '../images/nft-item/FBSC1.png'
import FBSC2 from '../images/nft-item/FBSC2.png'
import FBSC3 from '../images/nft-item/FBSC3.png'
import FBSC4 from '../images/nft-item/FBSC4.png'
import FBSC5 from '../images/nft-item/FBSC5.png'
import FBSC6 from '../images/nft-item/FBSC6.png'
import Footer from "./Footer";
import Header from "./Header";

export default function NFTMarketPlace() {
    return (
        <div className="GamfiBody">
            <Header/>
            <div className="gamfi-breadcrumbs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="breadcrumbs-area sec-heading">
                                <div className="sub-inner mb-15"><a className="breadcrumbs-link" href="index.html">Home</a> <span
                                    className="sub-title">NFT Marketplace</span> <img className="heading-left-image"
                                        src={step} alt="StepsImage" /></div>
                                <h2 className="title mb-0">NFT Marketplace</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gamfi-explore-content gamfi-previous-section pt-70 md-pt-80 pb-200 md-pb-200">
                <div className="container">
                    <div className="project-menu-area d-flex align-items-center justify-content-between">
                        <div className="project-left-menu">
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation"><button className="tab-link active" id="home-tab"
                                    data-bs-toggle="tab" data-bs-target="#open-igo" type="button" role="tab"
                                    aria-controls="open-igo" aria-selected="true"> Cup of Coffee </button></li>
                                <li className="nav-item" role="presentation"><button className="tab-link" id="profile-tab"
                                    data-bs-toggle="tab" data-bs-target="#upcoming" type="button" role="tab"
                                    aria-controls="upcoming" aria-selected="false"> Coffee Machine </button></li>
                            </ul>
                        </div>
                        <div className="project-right-menu">
                            <ul className="al-access-menu">
                                <li className="block"><a href="#">All Block Chain</a>
                                    <ul className="sub-menu">
                                        <li><a href="#"><img
                                            src={previous1}
                                            alt="icon" /> Binance (BSC)</a></li>
                                        <li><a href="#"><img
                                            src={previous2}
                                            alt="icon" /> Ethereum (ETH)</a></li>
                                        <li><a href="#"><img
                                            src={previous3}
                                            alt="icon" /> Polygon</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="open-igo" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="project-shape-item hover-shape-border">
                                        <div className="project-item">
                                            <div className="project-info"><a href="#"> <img src={FBSC0}
                                                alt="Explore-Image" /> </a>
                                                <div className="project-auother">
                                                    <h4 className="mb-10"><a href="#" className="text-glow text-warning">Basic Cup</a>
                                                    </h4>
                                                    <div className="dsc text-white text-glitch">FBSC0 / 0 FB</div>
                                                </div>
                                            </div>
                                            <div className="project-content">
                                                <div className="project-header d-flex justify-content-between">
                                                    <div className="heading-title"></div>
                                                    <div className="project-icon"><img src={tokeniconfb} width='50'
                                                        alt='Project-Image' /></div>
                                                </div>
                                                <div className="project-media">
                                                    <ul className="project-listing">
                                                        <li>Mining <span>1,000 Hash/Second</span></li>
                                                        <li>Volume of mining <span>0.1 FS/Hour</span></li>
                                                        <li>Time to use <span>1,000 Hours</span></li>
                                                        <li>Max mining <span>100 FS</span></li>
                                                    </ul>
                                                </div>
                                            </div><span className="border-shadow shadow-1"></span> <span
                                                className="border-shadow shadow-2"></span> <span
                                                    className="border-shadow shadow-3"></span> <span
                                                        className="border-shadow shadow-4"></span>
                                        </div>
                                        <div className="icon-listing">
                                            <ul className="social-icon-list">
                                                <li><button className="readon hover-shape btn-buy-nft bg-success text-white">
                                                    <span className="btn-text">Get Free</span> <span
                                                        className="hover-shape1"></span> <span className="hover-shape2"></span>
                                                    <span className="hover-shape3"></span> </button></li>
                                            </ul>
                                        </div>
                                    </div><span className="border-shadow shadow-1"></span> <span
                                        className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                    <span className="border-shadow shadow-4"></span>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC1}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Startup Cup</a>
                                                </h4>
                                                <div className="dsc text-white text-glitch">FBSC1 / 1,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>10,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>1 FS/Hour</span></li>
                                                    <li>Time to use <span>3,000 Hours</span></li>
                                                    <li>Max mining <span>3,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC2}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Standard
                                                        Cup</a></h4>
                                                <div className="dsc text-white text-glitch">FBSC2 / 2,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>30,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>3 FS/Hour</span></li>
                                                    <li>Time to use <span>2,000 Hours</span></li>
                                                    <li>Max mining <span>6,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC3}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Advanced
                                                        Cup</a></h4>
                                                <div className="dsc text-white text-glitch">FBSC3 / 5,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>90,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>9 FS/Hour</span></li>
                                                    <li>Time to use <span>1,666 Hours</span></li>
                                                    <li>Max mining <span>15,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC4}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Enterprise
                                                        Cup</a></h4>
                                                <div className="dsc text-white text-glitch">FBSC4 / 10,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>300,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>30 FS/Hour</span></li>
                                                    <li>Time to use <span>1,333 Hours</span></li>
                                                    <li>Max mining <span>40,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC5}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Gold Cup</a>
                                                </h4>
                                                <div className="dsc text-white text-glitch">FBSC5 / 20,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>700,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>70 FS/Hour</span></li>
                                                    <li>Time to use <span>1,142 Hours</span></li>
                                                    <li>Max mining <span>80,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="project-shape-item hover-shape-border">
                                    <div className="project-item">
                                        <div className="project-info"><a href="#"> <img src={FBSC6}
                                                    alt="Explore-Image"/> </a>
                                            <div className="project-auother">
                                                <h4 className="mb-10"><a href="#" className="text-glow text-warning">Vip Cup</a>
                                                </h4>
                                                <div className="dsc text-white text-glitch">FBSC6 / 50,000 FB</div>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <div className="project-header d-flex justify-content-between">
                                                <div className="heading-title">
                                                    <h4>
                                                        <div className="timer timer_3">
                                                            <ul>
                                                                <li className="days"><span>d</span></li>
                                                                <li className="hours"><span>h</span></li>
                                                                <li className="minutes"><span>m</span></li>
                                                                <li className="seconds"><span>s</span></li>
                                                            </ul>
                                                        </div>
                                                    </h4>
                                                </div>
                                                <div className="project-icon"><img src={tokeniconfb} width="50"
                                                        alt="Project-Image"/></div>
                                            </div>
                                            <div className="project-media">
                                                <ul className="project-listing">
                                                    <li>Mining <span>2,000,000 Hash/Second</span></li>
                                                    <li>Volume of mining <span>200 FS/Hour</span></li>
                                                    <li>Time to use <span>1,000 Hours</span></li>
                                                    <li>Max mining <span>200,000 FS</span></li>
                                                </ul>
                                            </div>
                                        </div><span className="border-shadow shadow-1"></span> <span
                                            className="border-shadow shadow-2"></span> <span
                                            className="border-shadow shadow-3"></span> <span
                                            className="border-shadow shadow-4"></span>
                                    </div>
                                    <div className="icon-listing">
                                        <ul className="social-icon-list">
                                            <li><button className="readon hover-shape btn-buy-nft"> <span
                                                        className="btn-text">Buy</span> <span className="hover-shape1"></span> <span
                                                        className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                            <li><button className="readon black-shape btn-sell-nft"> <span
                                                        className="btn-text">Sell</span> <span className="hover-shape1"></span>
                                                    <span className="hover-shape2"></span> <span className="hover-shape3"></span>
                                                </button></li>
                                        </ul>
                                    </div>
                                </div><span className="border-shadow shadow-1"></span> <span
                                    className="border-shadow shadow-2"></span> <span className="border-shadow shadow-3"></span>
                                <span className="border-shadow shadow-4"></span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}