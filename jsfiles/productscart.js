import { resuableComponent } from "./Components";
import { SavedForLater } from "./ProductsData";

document.addEventListener('DOMContentLoaded',()=>{
        // fetching components
        // header component
        resuableComponent('components/header.html','navbar-placeholder')
        // footer component
        resuableComponent('components/footer.html','footer-placeholder')

        // mapping the saved for later items
        let savedLaterContainer = document.getElementById('product-container');
        savedLaterContainer.innerHTML =  SavedForLater.map((products)=>{
                return`
                 <article class="bg-red-60 p-2 space-y-3 flex flex-col justify-between">
                    <img src="${products.image}" class="w-[100%] h-[100%] p-3 bg-slate-200 rounded-md" alt="${products.name}" loading="lazy">
                    <div class=" space-y-2">
                        <span class="font-medium text-lg ">$${products.price.toFixed(2)}</span>
                        <p class="text-slate-400 w-[80%]">${products.name}</p>
            
            <button class="text-customBlue hover:text-white border border-slate-300 hover:bg-customBlue duration-300 ease-in px-3 py-1 rounded-md font-medium">
                <i class="fa-solid fa-cart-shopping mr-2"></i>
                Saved for later
                </button>
                    </div>
                </article>
                `
        }).join('')
})