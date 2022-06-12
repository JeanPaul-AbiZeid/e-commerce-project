const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_in_btn = document.getElementById("login");
const sign_up_btn = document.getElementById("sign-up");

//when user clicks the home in header
nav_home.addEventListener("click", function(){
    window.location.href = "../../index.html";
})

//when user clicks the look at in header
look_at.addEventListener("click", function(){
    window.location.href = "../../index.html";
})

//when user clicks the log in in header
sign_up_btn.addEventListener("click", function(){
    window.location.href = "../sign-up/signup.html";
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

//function for log in button on click
let logIn = (e)=>{
    e.preventDefault();
    let data = new FormData();
  
    data.append('email', document.getElementById("email").value);
    data.append('password', document.getElementById("password").value);
  
    //linking with login api
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
      data: data,
    })
    .then(function (response) {
        var token = response.data.authorisation.token
        localStorage.setItem("jwt", token);
        window.location.href = "../explore/explore.html";
        
    })
    .catch(function (error){
        if(error.response.data.message == "Unauthorized"){
            alert("Incorrect email or password");
        }
        else{
            alert(error.response.data.message);
        }
    })
  }

  log_in_btn.addEventListener('click', logIn);