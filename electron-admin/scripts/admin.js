// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

//checkbox for showing password
var show = document.getElementById("toggle");


// When the user clicks the button, open the modal 
btn.addEventListener("click", function(){
    modal.style.display = "block";})

// When the user clicks on <span> (x), close the modal
span[0].addEventListener("click", function(){
    modal.style.display = "none";})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

const log_out_btn = document.getElementById("logout");

log_out_btn.addEventListener("click", function(){
    localStorage.removeItem("jwt");
    window.location.href = "./index.html";
})