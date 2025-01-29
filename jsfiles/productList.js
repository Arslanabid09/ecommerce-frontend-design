import { resuableComponent } from "./Components.js";
import { productsList } from "./ProductsData.js";

// fetching data
document.addEventListener("DOMContentLoaded",()=>{
    // header component
   resuableComponent('components/header.html','navbar-placeholder')
    // footer component
   resuableComponent('components/footer.html','footer-placeholder')
   
   // productContainer 
   const productContainer = document.getElementById('productList-container');
   // list view
   let productList = document.getElementById('product-list');
   // grid view 
   let productGrid = document.getElementById('product-grid')
   // default layout for products
   let currentLayOut = "grid"
   // mapping the productList
   function renderProducts(){
productContainer.innerHTML = productsList.map((product)=>{
    if(currentLayOut ==="list"){
            return `
            <article class="flex gap-3 bg-white rounded-md border border-slate-300 space-y-3 py-3 ">
            <img class="w-44 object-contain" src="${product.image}" alt="">
            <div class="px-5 py-2 flex flex-col gap-2">
            <div class="flex justify-between">
            <h3>${product.title}</h3>
            <i class="fa-regular fa-heart text-customBlue border border-slate-300 p-2 rounded cursor-pointer"></i>
            </div>
            <span >$${product.price} <del class="text-slate-400 text-sm pl-2">$${product.original_price}</del></span>
            <div class="text-yellow-500 text-xs flex gap-2">
            <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
                            <span >${product.rating}</span>
                            </div>
                            <div class="space-x-1">
                            <span class="inline-block w-2 h-2 rounded-full bg-slate-300"></span>
                            <span class="text-slate-400 font-light">${product.orders}</span>
                        </div>
                        <div class="space-x-1">
                            <span class="inline-block w-2 h-2 rounded-full bg-slate-300"></span>
                            <span class="text-green-500">Free Shipping</span>
                        </div>
                        
                        </div>
                    <p class="text-slate-500 font-light text-sm">${product.description}</p>
                    <a href="/ProductDetail.html?id=${product.id}&title=${product.title}&image=${product.image}&rating=${product.rating}&orders=${product.orders}" class="text-customBlue font-medium">view details</a>
                </div>
            </article>
                            `
                        }else{
                            return `
                            <article class="flex flex-col justify-between bg-white rounded-md border border-slate-300 space-y-3 py-3 ">
                            <img class="w-[60%] mx-auto" src="${product.image}" alt="">
                            <div class="px-5 py-2 flex flex-col gap-2">
                            <div class="flex justify-between items-center">
                            <span >$${product.price} <del class="text-slate-400 text-sm pl-2">$${product.original_price}</del></span>
                            <i class="fa-regular fa-heart text-customBlue border border-slate-300 p-2 rounded cursor-pointer"></i>
                            </div>
                            <div class="text-yellow-500 text-sm">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span >${product.rating}</span>
                            </div>
                            <a href="/ProductDetail.html?id=${product.id}&title=${product.title}&image=${product.image}&rating=${product.rating}&orders=${product.orders}" class="text-slate-500 font-light text-sm">${product.title}</a>
                            </div>
                            </article>`
                        }
                    }).join("");
}

// Product for list view
productList.addEventListener("click", () => {
    currentLayOut = "list"
    console.log(currentLayOut);
    
    productContainer.classList.remove('grid-cols-3')
    productContainer.classList.add('grid-cols-1')
    renderProducts()

});

// Product for grid view
productGrid.addEventListener("click", () => {
    currentLayOut = "grid"
    console.log(currentLayOut);
    
    productContainer.classList.remove('grid-cols-1')
    productContainer.classList.add('grid-cols-3')
    renderProducts()
});
// initial render
renderProducts();
// toggle functionality for dropdown
const toggleButton = (event)=>{
    // handling multiple ids 
    const targetedId = event.target.getAttribute('data-target')
    // getting id
    let productItems  = document.getElementById(targetedId)
    productItems.classList.toggle("hidden")
}
window.toggleButton = toggleButton

})
