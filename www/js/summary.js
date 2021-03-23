$("#summary-account").ready(function () {
    initSummary();
});

$("#summary-account").change(function () {
    const userData = funds[paramUserId];

    // get row data
    let currentBalance = 0;
    let rowData = [];
    if (this.value === "chequing") {
        rowData = userData.chequing.summary;
        currentBalance = funds[paramUserId].chequing.balance;
    } else if (this.value === "saving") {
        rowData = userData.saving.summary;
        currentBalance = userData.saving.balance;
    }


    // clear row
    deleteAllSummaryRow();

    // set row data
    if (isEmpty(rowData)) {
        emptyData();
    } else {
        let rowBalance;
        let rowCount = 10;

        rowData.forEach(function (row) {
            if (rowCount !== 0) {
                if (isEmpty(rowBalance)) {
                    rowBalance = currentBalance;
                }
                addSummaryRow(row, rowBalance);
                rowBalance = rowBalance - row.in + row.out;
                rowCount--;
            }
        })
    }

});

// add row
function addSummaryRow(rowData, rowBalance) {
    let newRow = $("<tr>");
    let cols = "";

    cols += "<td>" + rowData.date + "</td>";
    if (rowData.in > 0) {
        cols += "<td class='text-right text-success'>" + numberWithCommas(rowData.in) + "</td>";
    } else if (rowData.out > 0) {
        cols += "<td class='text-right text-danger'>- " + numberWithCommas(rowData.out) + "</td>";
    } else {
        cols += "<td class='text-right'>&nbsp;</td>";
    }
    cols += "<td class='text-right text-info'>" + numberWithCommas(rowBalance > 0 ? rowBalance : 0) + "</td>";

    newRow.append(cols);
    $("#summary-list").append(newRow);
}

// delete summary row
function deleteAllSummaryRow() {
    let rows = $("#summary-list tr");
    for (let i = 1; i < rows.length; i++) {
        rows[i].remove();
    }
}

// add empty data
function emptyData() {
    let newRow = $("<tr>");
    newRow.append("<td colspan='3' class='text-center'> Sin datos </td>");
    $("#summary-list").append(newRow);
}

// init
function initSummary() {
    $("#summary-account option:eq(0)").prop("selected", true);
    deleteAllSummaryRow();
    emptyData();
}