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

document.getElementById("title").innerHTML = "hi";
document.getElementById("description").innerHTML = "bye";
document.getElementById("category").innerHTML = "test";

function toggle(){
    let heart_color = document.querySelector("#heart")
    if(heart_color.style.color === "red"){
        heart_color.style.color = "gray";
    }else{
        heart_color.style.color = "red";
    }
}

let heart = document.getElementById("heart");
heart.addEventListener('click', toggle);