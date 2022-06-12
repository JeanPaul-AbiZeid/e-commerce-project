const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_out_btn = document.getElementById("log-out");

//when user clicks the home in header
nav_home.addEventListener("click", function(){
    window.location.href = "./explore.html";
})

//when user clicks the look at in header
look_at.addEventListener("click", function(){
    window.location.href = "./explore.html";
})

//when user clicks the log in in header
log_out_btn.addEventListener("click", function(){
    localStorage.removeItem("jwt");
    window.location.href = "../log-in/login.html";
})

function createFavItem(name, description, category){
    const main = document.createElement("div");
    main.className = "product-card";
    const container = document.querySelector("#favorite");
    container.appendChild(main);

    const image_container = document.createElement("div");
    image_container.className = "product-image";
    const image = document.createElement("img");
    image.src = "./assets/product.jpg";

    image_container.appendChild(image);
    main.appendChild(image_container);

    const fav_div = document.createElement("div");
    fav_div.className = "card";
    main.appendChild(fav_div);

    const product_name = document.createElement("h3");
    product_name.innerText = name;
    fav_div.appendChild(product_name);

    const heart = document.createElement("i");
    heart_class = heart.classList(heart);
    heart_class.add("fa");
    heart_class.add("fav");
    heart_class.add("fav");
    fav_div.appendChild(heart);

    const product_category = document.createElement("h4");
    product_category.innerText = "Category: " + category;
    main.appendChild(product_category);

    const product_desc = document.createElement("p");
    product_desc.innerText = description;
    main.appendChild(product_desc);
}