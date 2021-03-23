
$("#login").click(function () {
    let email = $("#email").val();
    let password = $("#password").val();

    if (!isEmpty(funds[email]) && funds[email].password === password) {
        paramUserId = email;
        $("#user-name").html(funds[paramUserId].name);

        allClearSection();
        $(".menu").show();
        $("#password").val("");
    } else {
        console.info("Invalid Email or Password");
        $("#invalidLogin").show();
    }
});


function dismissibleAlert() {
    let alert = document.querySelector(".alert")
    alert.style.display = "none";
}