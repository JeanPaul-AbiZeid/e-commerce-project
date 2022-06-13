// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("add-item");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close");

// //checkbox for showing password
// var show = document.getElementById("toggle");


// // When the user clicks the button, open the modal 
// btn.addEventListener("click", function(){
//     modal.style.display = "block";})

// // When the user clicks on <span> (x), close the modal
// span[0].addEventListener("click", function(){
//     modal.style.display = "none";})

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
// }
// }

const log_out_btn = document.getElementById("logout");
const add_category = document.getElementById("add-category");

log_out_btn.addEventListener("click", function(){
    localStorage.removeItem("jwt");
    window.location.href = "./index.html";
})

function add(){
    jwt = localStorage.getItem("jwt")

    let data = new FormData();
    
    data.append('name', document.getElementById("item-category").value);

    axios({
        method : 'post',
        url : 'http://127.0.0.1:8000/api/addcategory',
        headers: {
            'Authorization': `token ${jwt}`
        },
        data: data
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
    console.error(error)
    })
}

add_category.addEventListener('click', add);

axios({
    url: 'http://127.0.0.1:8000/api/getitems',
}).then(function(response){
    for(let i=0; i<response.data.items.length; i++){
        let name = response.data.items[i].name;
        let description = response.data.items[i].description;
        let category = response.data.items[i].category;
        createItem(name, description, category);
    }
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

    const title_div = document.createElement("div");
    title_div.className = "card";
    main.appendChild(title_div);
    const product_name = document.createElement("h3");
    product_name.innerText = name;
    title_div.appendChild(product_name);

    const product_category = document.createElement("h4");
    product_category.innerText = "Category: " + category;
    main.appendChild(product_category);

    const product_desc = document.createElement("p");
    product_desc.innerText = description;
    main.appendChild(product_desc);
}

function createCategory(id, name){
    const cat = document.createElement("option");
    cat.value = id;
    cat.innerHTML = name;

    const drop = document.getElementById("categories")
    drop.appendChild(cat);
}

axios({
    url: 'http://127.0.0.1:8000/api/getcategories',
}).then(function(response){
    for(let i=0; i<response.data.items.length; i++){
        let name = response.data.items[i].name;
        let id = response.data.items[i].id;
        
        createCategory(id, name);
    }
})

const add_item = document.getElementById("add-item");
function getInput(){
    jwt = localStorage.getItem("jwt")

    let data = new FormData();
    
    data.append('name', document.getElementById("item-name").value);
    data.append('description', document.getElementById("item-description").value);
    let select_item = document.getElementById("categories");
    data.append('category_id', select_item.options[select_item.selectedIndex].value);

    axios({
        method : 'post',
        url : 'http://127.0.0.1:8000/api/additem',
        headers: {
            'Authorization': `token ${jwt}`
        },
        data: data
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
    console.error(error)
    })
}

add_item.addEventListener('click', getInput)




