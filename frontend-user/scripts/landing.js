const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_in = document.getElementById("log-in");

//when user clicks the home in header
nav_home.addEventListener("click", function(){
    window.location.href = "./index.html";
})

//when user clicks the look at in header
look_at.addEventListener("click", function(){
    window.location.href = "./index.html";
})

//when user clicks the log in in header
log_in.addEventListener("click", function(){
    window.location.href = "./pages/log-in/login.html";
})