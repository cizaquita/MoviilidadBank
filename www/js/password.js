$("#change-password").click(function () {
    $("#success-password-alert").hide();
    $("#fail-password-alert").hide();
    $("#fail-new-password-alert").hide();

    let fund = funds[paramUserId];
    if ($("#old-password").val() !== fund.password) {
        $("#fail-password-alert").show();
    } else if ($("#new-password").val().length < 4 ) {
        $("#fail-new-password-alert").show();
    } else {
        fund.password = $("#new-password").val();
        $("#success-password-alert").show();
        $("#old-password").val("");
        $("#new-password").val("");
    }
});

function changePasswordClear() {
    $("#success-password-alert").hide();
    $("#fail-password-alert").hide();
    $("#fail-new-password-alert").hide();
    $("#old-password").val("");
    $("#new-password").val("");
}