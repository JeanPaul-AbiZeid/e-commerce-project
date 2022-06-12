const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_in_btn = document.getElementById("login");
const sign_up_btn = document.getElementById("sign_up");

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

//checkbox for showing password
var show = document.getElementById("toggle");

//function that shows password with checkbox
show.addEventListener("click", reveal);
function reveal() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

