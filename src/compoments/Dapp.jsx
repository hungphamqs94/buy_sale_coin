import React from "react";

export default function Dapp(){
    return(
        <div className="modal fade" id="walletInformation" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modals-title mb-0" id="exampleModalLabel">Provider Error</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="icon-x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="des-heading">
                                <h4 className="mb-15">You have not installed DAPP, please install DAPP</h4>
                                <a id="linkProvider" target="_blank" rel="noreferrer noopener"
                                    href="https://docs.pancakeswap.finance/get-started/connection-guide" color="primary"
                                    font-size="16px" className="sc-7fd741e1-0 sc-7320e58-0 fdSpLB kSSHkM">Install now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}