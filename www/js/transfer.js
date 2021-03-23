// change trans from
$("#tran-from").change(function () {
        let fund = funds[paramUserId];

        if (this.value === 'chequing') {
            $("#current-balance").val(fund.chequing.balance);
            $("#current-balance-view").val(fund.chequing.balance > 0 ? fund.chequing.balance : 0);
            $("#credit-total").val(fund.chequing.creditTotal);
            $("#available").val(fund.chequing.creditAvail);

            $("#tran-to option[value='chequing']").prop("disabled", true).siblings().removeAttr("disabled");
            $("#tran-to").removeAttr("disabled");
            $("#amount").removeAttr("disabled");
        } else if (this.value === 'saving') {
            $("#current-balance").val(fund.saving.balance);
            $("#current-balance-view").val(fund.saving.balance > 0 ? fund.saving.balance : 0);
            $("#credit-total").val(fund.saving.creditTotal);
            $("#available").val(fund.saving.creditAvail);

            $("#tran-to option[value='saving']").prop("disabled", true).siblings().removeAttr("disabled");
            $("#tran-to").removeAttr("disabled");
            $("#amount").removeAttr("disabled");
        } else {
            $("#current-balance").val(0);
            $("#current-balance-view").val(0);
            $("#credit-total").val(0);
            $("#available").val(0);

            $("#tran-to option").removeAttr("disabled");
            $("#tran-to").prop("disabled", true);
            $("#amount").prop("disabled", true).val(0);
        }

        // change other things
        $("#tran-to option:eq(0)").prop("selected", true);
        toggleOther();
        checkFinalBalance();
    }
);

// change trans to
$("#tran-to").change(function () {

        // change option in other
        if (this.value === 'other') {
            // clear
            const orgOptions = $("#other-to option");
            for (let i = 0; i < orgOptions.length; i++) {
                orgOptions.remove();
            }

            const option = $("<option value=''>Seleccione...</option>");
            $('#other-to').append(option);

            const keys = Object.keys(funds);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] !== paramUserId) {
                    const option = $("<option value='" + keys[i] + "'>" + funds[keys[i]].name + "</option>");
                    $('#other-to').append(option);
                }
            }
        }

        toggleOther();
    }
);

// click submit button
$("#submit").click(function () {

        if (!valid()) {
            return
        }

        let fund = funds[paramUserId];

        const tranFrom = $("#tran-from").val();
        const tranTo = $("#tran-to").val();
        const amount = parseInt($("#amount").val());

        // out
        if (tranFrom === 'chequing') {

            // get using credit
            let usingCredit = 0;
            if (fund.chequing.balance <= 0) {
                usingCredit = amount;
            } else if (fund.chequing.balance < amount) {
                usingCredit = amount - fund.chequing.balance;
            }

            // update amount
            fund.chequing.balance = fund.chequing.balance - amount;
            fund.chequing.creditAvail = fund.chequing.creditAvail - usingCredit;

            // add summary
            fund.chequing.summary.unshift(makeSummaryOutData(amount));

        } else if (tranFrom === 'saving') {
            // get using credit
            let usingCredit = 0;
            if (fund.saving.balance <= 0) {
                usingCredit = amount;
            } else if (fund.saving.balance < amount) {
                usingCredit = amount - fund.saving.balance;
            }

            // update amount
            fund.saving.balance = fund.saving.balance - amount;
            fund.saving.creditAvail = fund.saving.creditAvail - usingCredit;

            // add summary
            fund.saving.summary.unshift(makeSummaryOutData(amount));
        }

        // in
        if (tranTo === 'chequing') {
            // add credit
            let usedCredit = fund.chequing.creditTotal - fund.chequing.creditAvail;
            if (usedCredit > 0) {
                fund.chequing.creditAvail = fund.chequing.creditAvail + amount;
                if (fund.chequing.creditAvail > fund.chequing.creditTotal) {
                    fund.chequing.creditAvail = fund.chequing.creditTotal;
                }
            }
            // add balance
            fund.chequing.balance = fund.chequing.balance + amount;

            // add summary
            fund.chequing.summary.unshift(makeSummaryInData(amount));
        } else if (tranTo === 'saving') {
            // add credit
            let usedCredit = fund.saving.creditTotal - fund.saving.creditAvail;
            if (usedCredit > 0) {
                fund.saving.creditAvail = fund.saving.creditAvail + amount;
                if (fund.saving.creditAvail > fund.saving.creditTotal) {
                    fund.saving.creditAvail = fund.saving.creditTotal;
                }
            }
            // add balance
            fund.saving.balance = fund.saving.balance + amount;

            // add summary
            fund.saving.summary.unshift(makeSummaryInData(amount));
        } else if (tranTo === 'other') {
            const otherTo = $("#other-to").val();
            const target = funds[otherTo];
            target.chequing.balance = target.chequing.balance + amount;

            // add summary
            target.chequing.summary.unshift(makeSummaryInData(amount));
        }


        initAll();

        $("#success-balance-transfer").show();
    }
);

$("#amount").change(function () {
        let balance = parseFloat($("#current-balance").val());
        let available = parseFloat($("#available").val());
        let totalAvailable = 0;
        if (balance > 0) {
            totalAvailable = balance + available;
        } else {
            totalAvailable = available;
        }

        if (parseFloat(this.value) > totalAvailable) {
            this.value = totalAvailable;
        } else if (parseFloat(this.value) < 0) {
            this.value = 0;
        }

        checkFinalBalance();
    }
);

// checking final balance and submit
function checkFinalBalance() {
    const finalBalance = $("#current-balance").val() - $("#amount").val();
    $("#final-balance").val(finalBalance > 0 ? finalBalance : 0);
}

// toggle other input
function toggleOther() {
    const to = document.querySelector("#tran-to");
    const other = document.querySelector("#other-to");
    if (to.value === 'other') {
        other.style.display = 'block';
    } else {
        other.style.display = 'none';
    }
}

// init
function initAll() {
    let fund = funds[paramUserId];

    $("#tran-from option:eq(0)").prop("selected", true);
    $("#tran-to option:eq(0)").prop("selected", true);
    $("#current-balance").val(0);
    $("#current-balance-view").val(0);
    $("#credit-total").val(fund.credit);
    $("#available").val(0);
    $("#amount").val(0);
    $("#final-balance").val(0);
    $("#otherToAlert").val("");
    toggleOther();
    clearAlert();
}

function valid() {
    clearAlert();

    if (isEmpty($("#tran-from").val())) {
        $("#tranFromAlert").show();
        return false;
    }

    if (isEmpty($("#tran-to").val())) {
        $("#tranToAlert").show();
        return false;
    } else if ($("#tran-to").val() === "other" && isEmpty($("#other-to").val())) {
        $("#otherToAlert").show();
        return false;
    }

    let balance = parseFloat($("#current-balance").val());
    let available = parseFloat($("#available").val());
    let totalAvailable = 0;
    if (balance > 0) {
        totalAvailable = balance + available;
    } else {
        totalAvailable = available;
    }

    if ($("#amount").val() <= 0) {
        $("#amountAlert").show();
        return false;
    } else if ($("#amount").val() > totalAvailable) {
        $("#amountAlert").show();
        return false;
    }

    return true;
}

function clearAlert() {
    $("#tranFromAlert").hide();
    $("#tranToAlert").hide();
    $("#otherToAlert").hide();
    $("#amountAlert").hide();
    $("#success-balance-transfer").hide();
}


