var ExchangeController = function () {
    this.initialize = function () {
        loadDataExchange();
        registerEvents();
        registerControl();
    }

    function registerControl() {

    }

    this.ReloadBalance = function (balance) {

        var raw = parseFloat(balance);

        if (raw > 0) {
            $('#CurrentBalance').text(be.formatNumber(raw, 4));
            return;
        }

        $('#CurrentBalance').text(be.formatCurrency(0));
    }

    function registerEvents() {

        be.registerNumber();

        $('.btnMax').on('click', function (e) {

            var raw = parseFloat(DeFiHelper.BalanceInEth);

            if (raw > 0) {

                raw -= 0.0002;

                $('#txtAmount').val(be.formatNumber(raw, 4));

                CalculateInterest();
            }
        });

        $('#txtAmount').keyup(function (e) {

            debugger;

            var amount = parseFloat($(this).val());

            if (isNaN(amount)) {
                amount = 0;
            }

            var raw = parseFloat(DeFiHelper.BalanceInEth);

            if (raw > 0) {
                raw -= 0.0002;
            }

            if (amount > raw) {
                $(this).val(be.formatNumber(raw, 4));
            }

            CalculateInterest();
        });

        $("#btnConfirm").on('click', async function (e) {

            var amount = parseFloat($('#txtAmount').val());

            var txnType = $('#transactionType').val();

            if (amount > 0) {
                await DeFiHelper.SaleToken(amount, txnType);
            }
        });

    }

    function CalculateInterest() {

        var tokenPrice = parseFloat($("#tokenPrice").val());

        var bnbPrice = parseFloat($("#bnbPrice").val());

        var txtAmount = parseFloat($("#txtAmount").val());
        debugger;
        var totalUSD = bnbPrice * txtAmount;

        $(".lblTotalUSD").text("$" + be.formatCurrency(totalUSD));

        var totalToken = totalUSD / tokenPrice;

        $(".lblTotalToken").text(be.formatCurrency(totalToken) + " FB");
    }


    function loadDataExchange() {

        $.ajax({
            type: 'GET',
            data: {
            },
            url: '/Exchange/GetData',
            dataType: 'json',
            beforeSend: function () {
                be.startLoading();
            },
            success: function (response) {

                $('#tokenPrice').val(response.TokenPrice);

                $('.tokenPrice').html(response.TokenPrice);

                $('#bnbPrice').val(response.BNBPrice);

                $('#transactionType').val(response.Type);

                $(".lblAddressReceive").html(DeFiHelper.CurrentAddress);

                be.stopLoading();
            },
            error: function (message) {
                be.notify(`${message.responseText}`, 'error');
                be.stopLoading();
            }
        });
    }

}