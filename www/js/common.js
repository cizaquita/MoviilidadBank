let paramUserId = '';

let funds = [];
funds['chris'] = {
    name: "Chris Iza",
    password: "chris",
    address1: "Av 167 # 68",
    address2: "Bogotá, Colombia",
    chequing: {
        balance: 4345, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2021/09/17", in: 0, out: 45},
            {date: "2021/09/15", in: 0, out: 128},
            {date: "2021/09/15", in: 0, out: 34},
            {date: "2021/09/10", in: 65, out: 0},
            {date: "2021/09/10", in: 0, out: 323},
            {date: "2021/09/09", in: 0, out: 6},
            {date: "2021/09/09", in: 0, out: 120},
            {date: "2021/09/09", in: 0, out: 59},
            {date: "2021/09/09", in: 100, out: 0},
            {date: "2021/09/07", in: 0, out: 13},
            {date: "2021/09/05", in: 0, out: 5},
            {date: "2021/09/04", in: 0, out: 24},
            {date: "2021/09/02", in: 0, out: 7},
            {date: "2021/08/31", in: 4235, out: 0},
            {date: "2021/08/30", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 32534, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2021/09/17", in: 12823, out: 0},
            {date: "2021/09/15", in: 0, out: 1000},
            {date: "2021/09/13", in: 0, out: 3012},
            {date: "2021/09/10", in: 829, out: 0},
            {date: "2021/09/07", in: 0, out: 493},
            {date: "2021/09/04", in: 0, out: 1093},
            {date: "2021/09/01", in: 93, out: 0},
            {date: "2021/08/24", in: 0, out: 243},
            {date: "2021/08/10", in: 829, out: 0},
            {date: "2021/08/05", in: 0, out: 120},
            {date: "2021/08/04", in: 0, out: 3493},
            {date: "2021/08/01", in: 93, out: 0},
            {date: "2021/07/24", in: 0, out: 137},
            {date: "2021/07/10", in: 829, out: 0},
            {date: "2021/07/05", in: 0, out: 120}
        ]
    }

};
funds['user1'] = {
    name: "User1",
    password: "user1",
    address1: "Carrera 27 # 8 - 5",
    address2: "Cali, Colombia",
    chequing: {
        balance: 1324, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2021/09/16", in: 0, out: 35},
            {date: "2021/09/16", in: 0, out: 128},
            {date: "2021/09/15", in: 0, out: 324},
            {date: "2021/09/11", in: 0, out: 230},
            {date: "2021/09/10", in: 34, out: 0},
            {date: "2021/09/09", in: 98, out: 0},
            {date: "2021/09/05", in: 0, out: 20},
            {date: "2021/09/04", in: 0, out: 120},
            {date: "2021/09/02", in: 0, out: 32},
            {date: "2021/09/01", in: 0, out: 13},
            {date: "2021/08/29", in: 0, out: 52},
            {date: "2021/08/23", in: 0, out: 24},
            {date: "2021/08/22", in: 0, out: 76},
            {date: "2021/08/17", in: 12, out: 0},
            {date: "2021/08/15", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 293, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2021/09/17", in: 13, out: 0},
            {date: "2021/09/15", in: 0, out: 37},
            {date: "2021/09/13", in: 0, out: 326},
            {date: "2021/09/10", in: 800, out: 0},
            {date: "2021/09/07", in: 0, out: 393},
            {date: "2021/09/04", in: 0, out: 1093},
            {date: "2021/09/01", in: 93, out: 0},
            {date: "2021/08/24", in: 0, out: 243},
            {date: "2021/08/10", in: 829, out: 0},
            {date: "2021/08/05", in: 0, out: 120},
            {date: "2021/08/04", in: 0, out: 3493},
            {date: "2021/08/01", in: 93, out: 0},
            {date: "2021/07/24", in: 0, out: 137},
            {date: "2021/07/10", in: 829, out: 0},
            {date: "2021/07/05", in: 0, out: 120}
        ]
    }

};
funds['user2'] = {
    name: "User2",
    password: "user2",
    address1: "Av 200 # 1 # 27",
    address2: "Medellín, Colombia",
    chequing: {
        balance: 204, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2021/09/16", in: 0, out: 35},
            {date: "2021/09/16", in: 0, out: 128},
            {date: "2021/09/15", in: 0, out: 324},
            {date: "2021/09/11", in: 0, out: 230},
            {date: "2021/09/10", in: 34, out: 0},
            {date: "2021/09/09", in: 98, out: 0},
            {date: "2021/09/05", in: 0, out: 20},
            {date: "2021/09/04", in: 0, out: 120},
            {date: "2021/09/02", in: 0, out: 32},
            {date: "2021/09/01", in: 0, out: 13},
            {date: "2021/08/29", in: 0, out: 52},
            {date: "2021/08/23", in: 0, out: 24},
            {date: "2021/08/22", in: 0, out: 76},
            {date: "2021/08/17", in: 12, out: 0},
            {date: "2021/08/15", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 2132, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2021/09/17", in: 13, out: 0},
            {date: "2021/09/15", in: 0, out: 37},
            {date: "2021/09/13", in: 0, out: 326},
            {date: "2021/09/10", in: 800, out: 0},
            {date: "2021/09/07", in: 0, out: 393},
            {date: "2021/09/04", in: 0, out: 1093},
            {date: "2021/09/01", in: 93, out: 0},
            {date: "2021/08/24", in: 0, out: 243},
            {date: "2021/08/10", in: 829, out: 0},
            {date: "2021/08/05", in: 0, out: 120},
            {date: "2021/08/04", in: 0, out: 3493},
            {date: "2021/08/01", in: 93, out: 0},
            {date: "2021/07/24", in: 0, out: 137},
            {date: "2021/07/10", in: 829, out: 0},
            {date: "2021/07/05", in: 0, out: 120}
        ]
    }

};


function isEmpty(value) {
    return value === "" || value == null || value === undefined || (value != null && typeof value === "object" && !Object.keys(value).length);
}

function numberWithCommas(number) {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function currentDate() {
    const d = new Date();
    return d.getFullYear() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2);
}

function makeSummaryInData(inAmount) {
    return {date: currentDate(), in: inAmount, out: 0}
}

function makeSummaryOutData(outAmount) {
    return {date: currentDate(), in: 0, out: outAmount}
}

// Navigation
$("#nav-transfer-funds").click(function () {
    allClearSection();
    initAll();
    $(".transfer").show();
});
$("#nav-change-password").click(function () {
    allClearSection();
    changePasswordClear();
    $(".my-password").show();
});
$("#nav-account-summary").click(function () {
    allClearSection();
    initSummary();
    $(".account-summary").show();
});
$("#nav-exit").click(function () {
    allClearSection();
    $(".login").show();
});
$(".nav-back").click(function () {
    allClearSection();
    $(".menu").show();
});

function allClearSection() {
    $(".login").hide();
    $(".menu").hide();
    $(".transfer").hide();
    $(".admin").hide();
    $(".my-password").hide();
    $(".print-check").hide();
    $(".account-summary").hide();
    $(".container").width(345);
}
