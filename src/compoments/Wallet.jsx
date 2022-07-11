import React from "react";
import metaMask from '../client-side/earntoken/assets/images/icons/meta-mask.png'
import trust from '../client-side/earntoken/assets/images/icons/trust.png'

export default function Wallet() {
    return(
        <div className="modal fade " id="WalletConnect" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modals-title  mb-0" id="exampleModalLabel">Connect Wallet</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                className="icon-x"></i></button>
                        </div>
                        <div className="modal-body">
                            <p className="mb-20">Please select a wallet to connect to this marketplace</p>
                            <div className="connect-section">
                                <ul className="heading-list">
                                    <li><a id="wallet-connect-metamask" href="index.html"><span><img
                                        src={metaMask}
                                        alt="Meta" /></span>MetaMask</a></li>
                                    <li><a href="index.html" id="wallet-connect-trust"><span><img
                                        src={trust}
                                        alt="Trust" /></span>Trust Wallet</a></li>
                                </ul>
                            </div>
                            <p>
                                By connecting your wallet, you agree to our <a href="#">
                                    <span className="modal-title">Terms of Service </span>
                                </a>and our <a href="index.html"><span className="modal-title"> Privacy Policy</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}