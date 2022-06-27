import React from "react";

export default function Header() {
    return (
        <header id="gamfi-header" className="gamfi-header-section transparent-header">
                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                                <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="images/tokenlogo.png" width="200" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="header-menu">
                                        <ul className="nav-menu">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="NFTMarketplace.html">NFT Market</a>
                                            </li>
                                            <li>
                                                <a href="Exchange.html">Sale</a>
                                            </li>
                                            <li>
                                                <a href="Drink/PreDrink.html">F<span style={{fontFamily: "fantasy"}}>&</span>B To
                                                    Earn</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Earn</a>
                                                <ul className="sub-menu">
                                                    <li><a href="Saving.html">Savings</a></li>
                                                    <li><a href="index.html">Staking</a></li>
                                                    <li><a href="index.html">Liquidity Farming</a></li>
                                                    <li><a href="iindex.html">Auto-Invest</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gamfi-btn-area">
                                    <ul>
                                        <li>
                                            <a id="nav-expander" className="nav-expander bar" href="index.html">
                                                <div className="bar">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="buy-token">
                                            <a style={{display:"none"}} className="readon black-shape btnBuyToken" href="index.html">
                                                <span className="btn-text lbWalletAddress">My Address</span>
                                                <i className="icon-arrow_down"></i>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </a>
                                            <ul>
                                                <li><a href="Referral.html"> Referral</a></li>
                                                <li><a href="Wallet.html"> Wallet</a></li>
                                                <li><a href="Transaction.html"> Transaction</a></li>
                                                <li><a href="RequestStatus.html"> Request Status</a></li>
                                                <li><a href="index.html"> Get Drink
                                                    Code</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button type="button" className="readon white-btn hover-shape btnConnectWallet"
                                                data-bs-toggle="modal" data-bs-target="#WalletConnect">
                                                <img src="client-side/earntoken/assets/images/icons/connect.png" alt="Icon" />
                                                <span className="btn-text">Connect </span>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                        <div className="close-btn">
                            <a id="nav-close2" className="nav-close" href='index.html'>
                                <div className="line">
                                    <span className="line1"></span>
                                    <span className="line2"></span>
                                </div>
                            </a>
                        </div>
                        <div className="sidebar-logo mb-30">
                            <a href="index-2.html"><img src="images/tokenlogo.png" width="200" alt="" /></a>
                        </div>
                        <ul className="nav-menu">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="NFTMarketplace.html">NFT Market</a>
                            </li>
                            <li>
                                <a href="Exchange.html">Sale</a>
                            </li>
                            <li>
                                <a href="Drink/PreDrink.html">F<span style={{fontFamily: "fantasy"}}>&</span>B To Earn</a>
                            </li>
                            <li>
                                <a href="index.html">Earn</a>
                                <ul className="sub-menu">
                                    <li><a href="Saving.html">Savings</a></li>
                                    <li><a href="index.html">Staking</a></li>
                                    <li><a href="index.html">Liquidity Farming</a></li>
                                    <li><a href="index.html">Dual Investment</a></li>
                                    <li><a href="index.html">Auto-Invest</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children btnBuyToken" style={{display:"none"}}>
                                <a href="index.html" className="lbWalletAddress">Buy Token</a>
                                <ul className="sub-menu">
                                    <li><a href="Referral.html"> Referral</a></li>
                                    <li><a href="Wallet.html"> Wallet</a></li>
                                    <li><a href="Transaction.html"> Transaction</a></li>
                                    <li><a href="RequestStatus.html"> Request Status</a></li>
                                    <li><a href="index.html" onClick="return GetDrinkCode()"> Get Drink Code</a></li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" className="btnConnectWallet readon black-shape-big connectWalletBtnforMobile"
                                    data-bs-toggle="modal" data-bs-target="#WalletConnect">
                                    <img src="client-side/earntoken/assets/images/icons/connect_white.png" alt="Icon" />
                                    <span className="btn-text">Connect </span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                        </ul>
                    </nav>

                </header>
    )
}