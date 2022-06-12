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


let signUp= (e) =>{
    e.preventDefault();
    let data = new FormData();
  
    data.append('first_name', document.getElementById("first_name").value);
    data.append('last_name', document.getElementById("last_name").value);
    data.append('email', document.getElementById("email").value);
    data.append('password', document.getElementById("password").value);
  
    //linking with sign up api
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/register',
      data: data,
    })
    .then(function (response) {
        if(response.data.message == "error"){
            alert("email already used or incorrect email format")
        }
        
        var token = response.data.authorisation.token;
        localStorage.setItem("jwt", token);
        window.location.href = "../explore/explore.html";
    })
    .catch(function (error){
      console.log(error);
    })
}

sign_up_btn.addEventListener('click', signUp)

