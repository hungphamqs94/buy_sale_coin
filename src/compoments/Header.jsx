import React, { useEffect, useState } from "react";
import imageLogo from "../images/logo.png";
import Web3 from 'web3';
import imageConnect from '../client-side/earntoken/assets/images/icons/connect.png';

export default function Header() {

    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make sure you have Metamask installed!");
          return;
        } else {
          console.log("Wallet exists! We're ready to go!")
        }
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account: ", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
    }

    const connectWalletHandler = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
            const web3 = window.web3
            const accounts = await web3.eth.getAccounts()
            if (accounts.length !== 0) {
                const account = accounts[0];
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found");
            }
        } catch (err) {
          console.log(err)
        }
    }

    useEffect(() => {
        checkWalletIsConnected();
    }, [])

    
    
    return (
        <header id="gamfi-header" className="gamfi-header-section transparent-header">
                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                                <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src={imageLogo} width="200" alt="logo" />
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
                                          {currentAccount?<p style={{marginTop: '25px', color: 'red'}}>{currentAccount}</p>:<button type="button" className="btnConnectWallet readon black-shape-big connectWalletBtnforMobile"
                                            data-bs-toggle="modal" data-bs-target="#WalletConnect">
                                                <img src={imageConnect} alt="Icon" />
                                                <span className="btn-text" onClick={connectWalletHandler}>Connect </span>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </button>}
                                           
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
                            <a href="index-2.html"><img src={imageLogo} width="200" alt="" /></a>
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
                            {currentAccount?<p style={{marginTop: '25px', color: 'red'}}>{currentAccount}</p>:<button type="button" className="btnConnectWallet readon black-shape-big connectWalletBtnforMobile"
                                            data-bs-toggle="modal" data-bs-target="#WalletConnect">
                                                <img src={imageConnect} alt="Icon" />
                                                <span className="btn-text" onClick={connectWalletHandler}>Connect </span>
                                                <span className="hover-shape1"></span>
                                                <span className="hover-shape2"></span>
                                                <span className="hover-shape3"></span>
                                            </button>}
                            </li>
                        </ul>
                    </nav>

                </header>
    )
}