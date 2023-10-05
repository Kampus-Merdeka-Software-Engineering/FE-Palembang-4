function togglePasswordVisibility() {
    var passwordInput = document.getElementById("pass");
    var eyeIcon = document.querySelector(".eye-icon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bx-show");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("bx-show");
        eyeIcon.classList.add("bx-hide");
        }
}

function validateForm() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (username !== 'admin' && password !== "password") {
        document.getElementById("error-message").style.display = "block";
        return false;  
    } else {
        document.getElementById("error-message").style.display = "none";
        window.location.href = "TampilanDashboardAdmin.html"; 
        return false; 
    }
}