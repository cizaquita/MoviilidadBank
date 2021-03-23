$("#showAdmin").click(function () {
        let current = $(".admin").css("display");
        if (current === 'none') {
            $(".admin").css("display", "block");
            $(".container").width(740);
        } else {
            $(".admin").css("display", "none");
            $(".container").width(345);
        }
    }
);

$("#tran-source").ready(function () {
    const keys = Object.keys(funds);
    for (let count = 0; count < keys.length; count++) {
        const option = $("<option value='" + keys[count] + "'>" + funds[keys[count]].name + "</option>");
        $('#tran-source').append(option);
    }
});

$("#tran-target").ready(function () {
    const keys = Object.keys(funds);
    for (let count = 0; count < keys.length; count++) {
        const option = $("<option value='" + keys[count] + "'>" + funds[keys[count]].name + "</option>");
        $('#tran-target').append(option);
    }
});

// change source
$("#tran-source").change(function () {
    const sourceValue = this.value;
    const source = funds[sourceValue];

    // set target
    if (isEmpty(this.value)) {
        $("#tran-target option").removeAttr("disabled");
        $("#tran-target option:eq(0)").prop("selected", true);
        $("#tran-target").prop("disabled", true);

        // set balance
        $("#source-initial-balance").val(0);
    } else {
        $("#tran-target").removeAttr("disabled");
        $("#tran-target option:eq(0)").prop("selected", true);
        $("#tran-target option").filter(function () {
            return $(this).val() === sourceValue;
        }).prop("disabled", true).siblings().removeAttr("disabled");

        // set balance
        $("#source-initial-balance").val(source.chequing.balance);
    }

    $("#admin-amount").val(0);
    updateAdminAmount();

});

// change target
$("#tran-target").change(function () {
    const targetValue = this.value;
    const target = funds[targetValue];

    if (isEmpty(this.value)) {
        // set balance
        $("#target-initial-balance").val(0);

        $("#admin-amount").prop("disabled", true).val(0);
    } else {
        // set balance
        $("#target-initial-balance").val(target.chequing.balance);

        $("#admin-amount").removeAttr("disabled");
    }

    $("#admin-amount").val(0);
    updateAdminAmount();

});

// change amount
$("#admin-amount").change(function () {
        let sourceBalance = parseFloat($("#source-initial-balance").val());
        if (parseFloat(this.value) > sourceBalance) {
            this.value = sourceBalance;
        } else if (parseFloat(this.value) < 0) {
            this.value = 0;
        }

        updateAdminAmount();
    }
);

// click submit button
$("#adminSubmit").click(function () {

        if (!validAdmin()) {
            return
        }

        const tranSource = $("#tran-source").val();
        const source = funds[tranSource];
        const tranTarget = $("#tran-target").val();
        const target = funds[tranTarget];
        const amount = parseInt($("#admin-amount").val());

        source.chequing.balance = source.chequing.balance - amount;
        target.chequing.balance = target.chequing.balance + amount;

        // add summary
        source.chequing.summary.unshift(makeSummaryOutData(amount));
        target.chequing.summary.unshift(makeSummaryInData(amount));

        initAllAdmin();
    }
);

// validation
function validAdmin() {
    clearAlertAdmin();

    if (isEmpty($("#tran-source").val())) {
        $("#tranSourceAlert").show();
        return false;
    }

    if (isEmpty($("#tran-target").val())) {
        $("#tranTargetAlert").show();
        return false;
    }

    let available = parseFloat($("#source-initial-balance").val());

    if ($("#admin-amount").val() <= 0) {
        $("#adminAmountAlert").show();
        return false;
    } else if ($("#admin-amount").val() > available) {
        $("#adminAmountAlert").show();
        return false;
    }

    return true;
}

function clearAlertAdmin() {
    $("#tranSourceAlert").hide();
    $("#tranTargetAlert").hide();
    $("#adminAmountAlert").hide();
}

// init
function initAllAdmin() {
    $("#tran-source option:eq(0)").prop("selected", true);
    $("#tran-target option:eq(0)").prop("selected", true);
    $("#source-initial-balance").val(0);
    $("#source-actual-balance").val(0);
    $("#target-initial-balance").val(0);
    $("#target-actual-balance").val(0);
    $("#admin-amount").val(0);
    clearAlert();
}

function updateAdminAmount() {
    let sourceBalance = parseFloat($("#source-initial-balance").val());
    let targetBalance = parseFloat($("#target-initial-balance").val());
    let amount = parseFloat($("#admin-amount").val());

    $("#source-actual-balance").val(sourceBalance - amount);
    $("#target-actual-balance").val(targetBalance + amount);
}