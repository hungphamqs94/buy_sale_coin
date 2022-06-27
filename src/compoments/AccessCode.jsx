import React from "react";

export default function AccessCode() {
    return(
        <div className="modal fade" id="drinkCodeInformation" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modals-title mb-0">Access Code</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="icon-x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="mb-20">Please select a wallet to connect to this marketplace</p>
                            <div className="connect-section">
                                <input type="text" className="numberFormat4" readonly="readonly" value="" id="txtAccessCode" />
                                <button className="max btnMax" onclick="return CopyDrinkCode()">Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}