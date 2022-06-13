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

const log_in_btn = document.getElementById("login");

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
        if(response.data.user.type == 0){
            var token = response.data.authorisation.token
            localStorage.setItem("jwt", token);
            window.location.href = "./admin.html";
        }
    })
    .catch(function (error){
        // if(error.response.data.message == "Unauthorized"){
        //     alert("Incorrect email or password");
        // }
        // else{
        //     alert(error.response.data.message);
        // }
    })
  }

  log_in_btn.addEventListener('click', logIn);