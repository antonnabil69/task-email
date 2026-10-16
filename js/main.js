function validateData() {
    // Validation logic here

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var result = document.getElementById("result");

    result.setAttribute("class", "alert theme-danger d-block text-center");

    if (username == "" && email == "" && password == "" && confirmPassword == "") {
        result.innerHTML = "Enter Data";
        result.style.color = "red";
        return false;
    }
    else if (username.length < 5 || username.length > 15) {
        result.innerHTML = "Username must be between 5 and 15 characters";
        result.style.color = "red";
        return false;
    }
    else if (!email.indexOf("@") ==-1 || !email.indexOf(".com,5") ==-1) {
        result.innerHTML = "Invalid email ";
        result.style.color = "red";
        return false;
    }
    else if (password.length < 8) {
        result.innerHTML = "Weak Password";
        result.style.color = "red";
        return false;
    }
    else if (password != confirmPassword) {
        result.innerHTML = "Passwords do not match";
        result.style.color = "red";
        return false;
    }
    else {
        result.innerHTML = "Data is valid";
        result.style.color = "green";
        return true;
    }
}