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

axios({
    url: 'http://127.0.0.1:8000/api/getitems',
}).then(function(response){
    // console.log(response.data.items[0].name); 
    //looping over the array to get items data
    for(let i=0; i<response.data.items.length; i++){
        let name = response.data.items[i].name;
        let description = response.data.items[i].description;
        let category = response.data.items[i].category;
        createItem(name, description, category);
    }
    
    // <div class="product-card">
    //     <div class="product-image"><img src="./assets/product.jpg"></div>
    //     <h3>Name</h3>
    //     <p>description</p>
    // </div>
})

function createItem(name, description, category){
    const main = document.createElement("div");
    main.className = "product-card";
    const container = document.querySelector(".product-container");
    container.appendChild(main);

    const image_container = document.createElement("div");
    image_container.className = "product-image";
    const image = document.createElement("img");
    image.src = "./assets/product.jpg";

    image_container.appendChild(image);
    main.appendChild(image_container);

    const product_name = document.createElement("h3");
    product_name.innerText = name;
    main.appendChild(product_name);

    const product_category = document.createElement("h4");
    product_category.innerText = "Category: " + category;
    main.appendChild(product_category);

    const product_desc = document.createElement("p");
    product_desc.innerText = description;
    main.appendChild(product_desc);
}