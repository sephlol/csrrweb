document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        alert("Login successful!");

        // redirect to another page
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong username or password");
    }
});