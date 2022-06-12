const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_in_btn = document.getElementById("login");

//when user clicks the home in header
nav_home.addEventListener("click", function(){
    window.location.href = "../../index.html";
})

//when user clicks the look at in header
look_at.addEventListener("click", function(){
    window.location.href = "../../index.html";
})

//when user clicks the log in in header
log_in_btn.addEventListener("click", function(){
    window.location.href = "../log-in/login.html";
})