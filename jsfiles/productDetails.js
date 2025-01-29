import { resuableComponent } from "./Components.js";
import { homeAndOutDoor,youMayLike } from "./ProductsData.js";
 
 document.addEventListener("DOMContentLoaded",()=>{
    // header component
   resuableComponent('components/header.html','navbar-placeholder')
    // footer component
   resuableComponent('components/footer.html','footer-placeholder')

        // getting single product details
        const params = new URLSearchParams(window.location.search)
        document.getElementById('product-title').innerText = params.get('title');
        document.getElementById('productImage').src = params.get('image');
        document.getElementById('product-ratings').innerText = params.get('rating') || "No Ratings";
        document.getElementById('product-sold').innerText = params.get('orders') || "Not Available";

    // mapping you may like products
    let youMaylikeProducts = document.getElementById('youMay-like') 
    const productsData = youMayLike.map((products)=>{
        return `<article class="flex gap-2">
                        <img class="w-16 object-contains border border-slate-300 rounded-md" src="${products.image}" alt="${products.name}">
                        <div>
                            <p class="text-sm">${products.name}</p>
                            <span class="text-xs text-slate-400">${products.price}</span>
                        </div>
                    </article>`
    }).join('') 
    youMaylikeProducts.insertAdjacentHTML("beforeend",productsData) 





   // mapping related items 
   const productContainer = document.getElementById('product-container')
   productContainer.innerHTML = homeAndOutDoor.slice(0,6).map((product)=>{
      return`
      <article class="flex flex-col justify-between space-y-3">
    <img 
        class="bg-slate-200 rounded w-full mx-auto p-3" 
        src="${product.image}" 
        alt="${product.name}" 
    />
    <div class="">
        <a 
            href="#" 
            class="font-light text-sm block"
            title="${product.name}">
            ${product.name}
        </a>
        <span class="block text-slate-500 text-xs">
            ${product.price || "$32.50-$40.00"}
        </span>
    </div>
</article>

      `
   }).join('')





})