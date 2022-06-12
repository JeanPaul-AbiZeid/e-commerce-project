const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_out_btn = document.getElementById("log-out");

let favorites = []

//when user clicks the home in header
nav_home.addEventListener("click", function(){
    window.location.href = "../explore/explore.html";
})

//when user clicks the look at in header
look_at.addEventListener("click", function(){
    window.location.href = "../explore/explore.html";
})

//when user clicks the log in in header
log_out_btn.addEventListener("click", function(){
    localStorage.removeItem("jwt");
    window.location.href = "../log-in/login.html";
})