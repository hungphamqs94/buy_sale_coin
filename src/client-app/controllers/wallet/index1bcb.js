var WalletController = function () {
    this.initialize = function () {

        //
        registerEvents();
        registerControl();

        setTimeout(function () {
            loadWallets(DeFiHelper.CurrentAddress);
        }, 1000);
    }

    function registerControl() {
        be.registerNumber();
    }

    this.ReloadWallet = function (walletAddress) {
        loadWallets(walletAddress);
    }

    var registerEvents = function () {


        $('body').on('click', '#btnWithdrawToken', function (e) {
            if (checkConnect()) {
                showModalWithdrawToken()
            }
        });
        $('body').on('click', '#btnConfirmWithdrawToken', function (e) {
            confirmWithdrawToken();
        });

        $('body').on('click', '#btnWithdrawUSDT', function (e) {
            if (checkConnect()) {
                showModalWithdrawUSDT()
            }
        });
        $('body').on('click', '#btnConfirmWithdrawUSDT', function (e) {
            confirmWithdrawUSDT();
        });

        $('body').on('click', '#btnWithdrawBNB', function (e) {
            if (checkEnabled2FA()) {
                showModalWithdrawBNB()
            }
        });
        $('body').on('click', '#btnConfirmWithdrawBNB', function (e) {
            confirmWithdrawBNB();
        });

        $("#txtTokenFBAmount").focusout(function () {

            var token = parseFloat($('.TokenFBBalance').val().replace(/,/g, ''));

            var amount = parseFloat($(this).val().replace(/,/g, ''));

            var tokenFeeAmount = amount * 0.02;
            var tokenReceiveAmount = amount - tokenFeeAmount;

            if (amount > token) {
                $(".lblTokenErrorInsufficient").html("Insufficient account balance");
            }
            else {
                $(".lblTokenErrorInsufficient").html("");
            }

            $('#txtTokenFeeAmount').val(tokenFeeAmount);
            $('#txtTokenReceiveAmount').val(tokenReceiveAmount);
        });

        $("#txtUSDTAmount").focusout(function () {

            var usdt = parseFloat($('.USDTBalance').val().replace(/,/g, ''));

            var amount = parseFloat($(this).val().replace(/,/g, ''));

            var usdtFeeAmount = amount * 0.02;
            var usdtReceiveAmount = amount - usdtFeeAmount;

            if (amount > usdt) {
                $(".lblUSDTErrorInsufficient").html("Insufficient account balance");
            }
            else {
                $(".lblUSDTErrorInsufficient").html("");
            }

            $('#txtUSDTFeeAmount').val(usdtFeeAmount);
            $('#txtUSDTReceiveAmount').val(usdtReceiveAmount);
        });

        $("#txtBNBAmount").focusout(function () {

            var bnb = parseFloat($('.BNBBalance').val().replace(/,/g, ''));

            var amount = parseFloat($(this).val().replace(/,/g, ''));

            var bnbFeeAmount = amount * 0.01;
            var bnbReceiveAmount = amount - bnbFeeAmount;

            if (amount > bnb) {
                $(".lblBNBErrorInsufficient").html("Insufficient account balance");
            }
            else {
                $(".lblBNBErrorInsufficient").html("");
            }

            $('#txtBNBFeeAmount').val(bnbFeeAmount);
            $('#txtBNBReceiveAmount').val(bnbReceiveAmount);
        });
    }

    var withdrawTokenVM = null;
    function validateWithdrawToken() {
        withdrawTokenVM = {
            TokenBalance: parseFloat($('.TokenFBBalance').val().replace(/,/g, '')),
            Amount: parseFloat($('#txtTokenFBAmount').val().replace(/,/g, ''))
        };

        var isValid = true;

        if (withdrawTokenVM.Amount <= 0) {
            isValid = be.notify('Amount is required', 'error');
        }
        else {
            if (withdrawTokenVM.Amount < 1000) {
                isValid = be.notify('Minimum withdraw 1,000 FB', 'error');
            }
        }

        if (withdrawTokenVM.Amount > withdrawTokenVM.TokenBalance) {
            isValid = be.notify('Insufficient account balance', 'error');
        }

        return isValid;
    }
    function confirmWithdrawToken() {

        if (validateWithdrawToken()) {

            hideModalWithdrawToken();

            $.ajax({
                type: "POST",
                headers: {
                    "XSRF-TOKEN": $('input:hidden[name="__RequestVerificationToken"]').val()
                },
                url: "/Wallet/WithdrawWalletToken",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(withdrawTokenVM),
                beforeSend: function () {
                    be.startLoading();
                },
                success: function (response) {
                    be.stopLoading();

                    if (response.Success) {
                        be.success('Withdraw Token', response.Message, function () {
                            window.location.reload();
                        });
                    }
                    else {
                        be.error('Withdraw Token', response.Message);
                    }
                },
                error: function (message) {
                    be.notify(`${message.responseText}`, 'error');
                    be.stopLoading();
                }
            });
        }
    }
    function showModalWithdrawToken() {
        $("#ic_modal_withdraw_token").modal("show");
    }
    function hideModalWithdrawToken() {
        $("#ic_modal_withdraw_token").modal("hide");
    }

    var withdrawUSDTVM = null;
    function validateWithdrawUSDT() {
        withdrawUSDTVM = {
            USDTBalance: parseFloat($('.USDTBalance').val().replace(/,/g, '')),
            Amount: parseFloat($('#txtUSDTAmount').val().replace(/,/g, ''))
        };

        var isValid = true;

        if (withdrawUSDTVM.Amount <= 0) {
            isValid = be.notify('Amount is required', 'error');
        }
        else {
            if (withdrawUSDTVM.Amount < 10) {
                isValid = be.notify('Minimum withdraw 10 USDT', 'error');
            }
        }

        if (withdrawUSDTVM.Amount > withdrawUSDTVM.USDTBalance) {
            isValid = be.notify('Insufficient account balance', 'error');
        }

        return isValid;
    }
    function confirmWithdrawUSDT() {

        hideModalWithdrawUSDT();

        if (validateWithdrawUSDT()) {
            $.ajax({
                type: "POST",
                headers: {
                    "XSRF-TOKEN": $('input:hidden[name="__RequestVerificationToken"]').val()
                },
                url: "/Wallet/WithdrawWalletUSDT",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(withdrawUSDTVM),
                beforeSend: function () {
                    be.startLoading();
                },
                success: function (response) {
                    be.stopLoading();

                    if (response.Success) {
                        be.success('Withdraw USDT', response.Message, function () {
                            window.location.reload();
                        });
                    }
                    else {
                        be.error('Withdraw USDT', response.Message);
                    }
                },
                error: function (message) {
                    be.notify(`${message.responseText}`, 'error');
                    be.stopLoading();
                }
            });
        }
    }
    function showModalWithdrawUSDT() {
        $("#ic_modal_withdraw_usdt").modal("show");
    }
    function hideModalWithdrawUSDT() {
        $("#ic_modal_withdraw_usdt").modal("hide");
    }

    var WithdrawBNBVM = null;
    function validateWithdrawBNB() {
        var WithdrawBNBVM = {
            BNBBalance: parseFloat($('.BNBBalance').val().replace(/,/g, '')),
            Amount: parseFloat($('#txtBNBAmount').val().replace(/,/g, '')),
        };

        var isValid = true;

        if (WithdrawBNBVM.Amount <= 0) {
            isValid = be.notify('Amount is required', 'error');
        }
        else {
            if (WithdrawBNBVM.Amount < 0.05) {
                isValid = be.notify('Minimum withdraw 0.05 BNB', 'error');
            }
        }

        if (WithdrawBNBVM.Amount > WithdrawBNBVM.BNBBalance) {
            isValid = be.notify('Insufficient account balance', 'error');
        }

        return isValid;
    }
    function confirmWithdrawBNB() {
        if (validateWithdrawBNB()) {

            hideModalWithdrawBNB();

            $.ajax({
                type: "POST",
                headers: {
                    "XSRF-TOKEN": $('input:hidden[name="__RequestVerificationToken"]').val()
                },
                url: "/Wallet/WithdrawWalletBNB",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(WithdrawBNBVM),
                beforeSend: function () {
                    be.startLoading();
                },
                success: function (response) {
                    be.stopLoading();

                    if (response.Success) {
                        be.success('Withdraw BNB', response.Message, function () {
                            window.location.reload();
                        });
                    }
                    else {
                        be.error('Withdraw BNB', response.Message);
                    }
                },
                error: function (message) {
                    be.notify(`${message.responseText}`, 'error');
                    be.stopLoading();
                }
            });
        }
    }
    function showModalWithdrawBNB() {
        $("#ic_modal_withdraw_bnb").modal("show");
    }
    function hideModalWithdrawBNB() {
        $("#ic_modal_withdraw_bnb").modal("hide");
    }

    function loadWallets(addressPubKey) {
        if (addressPubKey) {
            $.ajax({
                type: 'GET',
                url: '/Wallet/GetWallets',
                dataType: 'json',
                data: { addressPubKey: addressPubKey },
                beforeSend: function () {
                    //be.startLoading();
                },
                success: function (response) {

                    //be.stopLoading();

                    if (response.Success) {
                        $('#FBBalance').html(be.formatCurrency(response.Data.FBBalance));
                        $('.FBBalance').val(be.formatCurrency(response.Data.FBBalance));

                        $('#FSBalance').html(be.formatCurrency(response.Data.FSBalance));
                        $('.FSBalance').val(be.formatCurrency(response.Data.FSBalance));

                        $('#USDTBalance').html(be.formatCurrency(response.Data.USDTBalance));
                        $('.USDTBalance').val(be.formatCurrency(response.Data.USDTBalance));

                        $('#BNBBalance').html(be.formatCurrency(response.Data.BNBBalance));
                        $('.BNBBalance').val(be.formatCurrency(response.Data.BNBBalance));
                    }
                    else {
                        be.notify(response.Message, 'error');
                    }
                },
                error: function (message) {
                    be.notify(`${message.responseText}`, 'error');
                    //be.stopLoading();
                }
            });
        } else {
            $('#FBBalance').html(be.formatCurrency(0));
            $('.FBBalance').val(be.formatCurrency(0));

            $('#FSBalance').html(be.formatCurrency(0));
            $('.FSBalance').val(be.formatCurrency(0));

            $('#USDTBalance').html(be.formatCurrency(0));
            $('.USDTBalance').val(be.formatCurrency(0));

            $('#BNBBalance').html(be.formatCurrency(0));
            $('.BNBBalance').val(be.formatCurrency(0));
        }
    }
}