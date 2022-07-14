import React, { useEffect, useState } from "react";
import step from '../client-side/earntoken/assets/images/icons/steps.png';
import tokenIcon from '../images/tokeniconfb.png';
import { ethers } from "ethers";
import Web3 from 'web3'
import contract from '../contracts/TokenSale.json';

const contractAddress = "0x14f86A498E5838228CE56d53D34C91763691A217";
const abi = contract.abi;

export default function FormBuy() {

    const [currentAccount, setCurrentAccount] = useState(null);
    const [currentBalance, setCurrentBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [swapValue, setSwapValue] = useState(0)

    const checkWalletIsConnected = async () => {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    const loadBalanceAccount = async () => {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account: ", web3.utils.fromWei(await web3.eth.getBalance(account), 'ether'));
            setCurrentAccount(account);
            setCurrentBalance(web3.utils.fromWei(await web3.eth.getBalance(account), 'ether'))  
        } else {
          console.log("No authorized account found");
        }
    }

    useEffect(() => {
        checkWalletIsConnected();
        loadBalanceAccount();
    }, [])

    const buyIDOXGA = async () => {
        try {
            const web3 = window.web3
            const contract = new web3.eth.Contract(abi, contractAddress)
            setContract(contract)
            console.log('value of', swapValue)
            contract.methods.buyTokensSeedRound(1).send({ from: currentAccount, value: web3.utils.toWei(swapValue, "ether") })
            .once('receipt', (receipt) => {
              console.log(receipt)
            })
        } catch (err) {
            console.log(err);
        }
    }

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
                                <div className="sub-inner mb-15"><a className="breadcrumbs-link" href="index.html">XGA Sale</a> <span
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
                                        style={{width:'40px', background:'#fff', borderRadius: '50%', padding:'5px'}} alt="iconToken"/> XGA Token
                                    </h4>
                                    <h4 className="mb-15">Price <span className="buse text-warning">$<span
                                        className="tokenPrice">0.15</span></span></h4>
                                </div>
                                <div className="project-content border-bottom-2">
                                    <div id="sevenDays" className="StakeTabcontent">
                                        <div className="project-media mb-40">
                                            <ul className="project-listing">
                                                <li>Total Sale: <strong>15,000,000.00 XGA</strong></li>
                                                <li>Min: <strong className="numberFormat">0.10</strong> <strong>BNB</strong></li>
                                                <li>Max: <strong className="numberFormat">50.00</strong> <strong>BNB</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-form-list">
                                    <h5 className="mb-18">Balance: <span id="CurrentBalance">{currentBalance?currentBalance:0}</span> BNB</h5>
                                    <div className="balance-form-area mb-27"><input className="numberFormat4" placeholder="0.1" id="txtAmount" value={swapValue} onChange={e => setSwapValue(e.target.value)}/>
                                        <button className="max btnMax">MAX</button>
                                        <div className="white-shape-small approve" id="btnConfirm"><input type="button"
                                            value="Confirm" onClick={buyIDOXGA}/> <span className="hover-shape1"></span> <span
                                                className="hover-shape2"></span> <span className="hover-shape3"></span></div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div id="sevenDays" className="StakeTabcontent">
                                        <div className="project-media mb-40">
                                            <ul className="project-listing">
                                                <li><p style={{float: 'left'}}>Swap Value:</p> <span className="lblTotalUSD">{swapValue} BNB</span></li>
                                                <li><p style={{float: 'left'}}>Token Receive:</p> <span className="lblTotalToken">0.00 FB</span></li>
                                                <li><p style={{float: 'left'}}>Address Receive:</p> <span className="lblAddressReceive" style={{fontSize: '12px', marginTop: '5px'}}>{currentAccount}</span></li>
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

