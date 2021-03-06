const nav_home = document.getElementById("home");
const look_at = document.getElementById("look-at");
const log_out_btn = document.getElementById("log-out");

let favorites = []

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

function createFavItem(id, name, description, category){
    const main = document.createElement("div");
    main.id = id;
    main.className = "product-card";
    const container = document.querySelector("#favorite");
    container.appendChild(main);

    const image_container = document.createElement("div");
    image_container.className = "product-image";
    const image = document.createElement("img");
    image.src = "../../assets/product.jpg";

    image_container.appendChild(image);
    main.appendChild(image_container);

    const fav_div = document.createElement("div");
    fav_div.className = "card";
    main.appendChild(fav_div);

    const product_name = document.createElement("h3");
    product_name.innerText = name;
    fav_div.appendChild(product_name);

    // const heart = document.createElement("i");
    // heart_class = heart.classList(heart);
    // heart_class.add("fa");
    // heart_class.add("fa-heart");
    // heart_class.add("fav");
    // fav_div.appendChild(heart);

    const product_category = document.createElement("h4");
    product_category.innerText = "Category: " + category;
    main.appendChild(product_category);

    const product_desc = document.createElement("p");
    product_desc.innerText = description;
    main.appendChild(product_desc);
}

function createItem(id, name, description, category){
    const main = document.createElement("div");
    main.id = id;
    main.className = "product-card";
    const container = document.querySelector("#remaining");
    container.appendChild(main);

    const image_container = document.createElement("div");
    image_container.className = "product-image";
    const image = document.createElement("img");
    image.src = "../../assets/product.jpg";

    image_container.appendChild(image);
    main.appendChild(image_container);

    const fav_div = document.createElement("div");
    fav_div.className = "card";
    main.appendChild(fav_div);

    const product_name = document.createElement("h3");
    product_name.innerText = name;
    fav_div.appendChild(product_name);

    // const heart = document.createElement("i");
    // heart_class = heart.classList(heart);
    // heart_class.add("fa");
    // heart_class.add("fa-heart");
    // heart_class.add("nfav");
    // fav_div.appendChild(heart);

    const product_category = document.createElement("h4");
    product_category.innerText = "Category: " + category;
    main.appendChild(product_category);

    const product_desc = document.createElement("p");
    product_desc.innerText = description;
    main.appendChild(product_desc);
}

jwt = localStorage.getItem("jwt")

axios.get('http://127.0.0.1:8000/api/getfavorites', {
  headers: {
    'Authorization': `token ${jwt}`
  }
})
.then((response) => {
    let favorites = []
    for(let i = 0; i<response.data.favorites.length; i++){
        let id = response.data.favorites[i].id;
        favorites.push(id)
    }
    localStorage.setItem("favorites", favorites)
    axios.get('http://127.0.0.1:8000/api/getitems')
        .then((response) => {
            if(favorites.length == 0){
                document.querySelector("#favorite").innerHTML = "No favorites Yet";
            }
            for(let i=0; i<response.data.items.length; i++){
                let id = response.data.items[i].id;
                if(favorites.includes(id)){
                    let j = i
                    let name = response.data.items[j].name;
                    let description = response.data.items[j].description;
                    let category = response.data.items[j].category;
                    createFavItem(id, name, description, category);
                    const product_card = document.querySelectorAll(".product-card");
                }else{
                    let name = response.data.items[i].name;
                    let description = response.data.items[i].description;
                    let category = response.data.items[i].category;
                    createItem(id, name, description, category);
                }
            }

            //when user clicks the restaurant card (declared inside the axios because it only worked here)
            const product_card = document.querySelectorAll(".product-card");

            product_card.forEach(function(item){
                item.addEventListener("click",function(){
                    //saved the clicked resto card id to local storage
                    localStorage.setItem("clicked_product_id", item.id);
                    window.location.href = "../item/item.html";
                })
            })
    }).catch((error) => {
        console.error(error)})
    
})
.catch((error) => {
  console.error(error)
})



