import { homeAndOutDoor,electronicsProducts,recommandedItems,dealsAndOffers } from "../jsfiles/ProductsData.js";
import { resuableComponent } from "./Components.js";

document.addEventListener("DOMContentLoaded",()=>{
    // fetching components
    // header component
    resuableComponent('components/header.html','navbar-placeholder')
    // footer component
    resuableComponent('components/footer.html','footer-placeholder')
    
// mapping homeAndOutDoor products
let homeProductsContainer = document.getElementById('home-p-container')
const products = homeAndOutDoor.map((product)=>{
    return `<article id="${product.id}" class=" border bg-white    p-2">
    <a href="/ProductLists" id="home-title" class=" text-sm font-medium ">${product.name}</a>
    <div class="flex justify-between items-center  mt-5">
         <p id="home-price" class="text-xs text-slate-400">${product.price}</p>
         <img id="home-img" class="w-14" src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
     </article>`
}).join("")
homeProductsContainer.innerHTML = products

// mapping electronics products
let electronicsProductsContainer = document.getElementById('electronics-products')
const electronicProducts = electronicsProducts.map((product)=>{
    return `<article id="${product.id}" class=" border bg-white    p-2">
    <a href="/ProductLists" id="electronics-title" class=" text-sm font-medium ">${product.name}</a>
    <div class="flex justify-between items-center  mt-5">
         <p id="electronics-price" class="text-xs text-slate-400">${product.price}</p>
         <img id="electronics-img" class="w-14 hover:scale-105 duration-500" src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
     </article>`
}).join("")
electronicsProductsContainer.innerHTML = electronicProducts

// mapping recommanded items
let recommandedItem = document.getElementById('Recommended-items')
 const recomandedProducts =  recommandedItems.map((product)=>{
     return `<article id="${product.id}" class="bg-white   w-full h-72 rounded-md space-y-3 flex flex-col justify-evenly">
                     <a href="/ProductLists"><img id="electronics-img" class="w-44 p-4 mx-auto  hover:scale-105 duration-500" src="${product.image}" alt="${product.description}" loading="lazy"></a>
                 <div class="space-y-2  px-4 w-full ">
                     <p id="electronics-price" class="text-xs ">$${product.price.toFixed(2)}</p>
                    <a href="#" id="electronics-title" class="text-slate-400 text-sm font-light w-16 ">${product.description}</a>
                    </div>
                          </article>`
}).join("");
recommandedItem.innerHTML = recomandedProducts

// deals and offers
let dealsAndOffer = document.getElementById('dealsAndOffers');
const offers = dealsAndOffers.map((products)=>{
     return`
     <article key class=" flex flex-col items-center  justify-between border   py-3  gap-3 ">
                        <a href="/ProductLists.html"><img  class="w-36 object-contain h-40 hover:scale-110 duration-300" src="${products.image}" alt="${products.name}" loading="lazy"></a>
                        <div class="text-center ">
                            <p class="font-semibold">${products.name}</p>
                            <span class="bg-red-300 text-red-700 mt-1 inline-block py-1 px-7 text-sm  rounded-full">${products.discount}</span>
                        </div>
                    </article>
     `
}).join('');
dealsAndOffer.innerHTML = offers

// timer for offers and deals

let time = 20 * 24 *60*60
let days = document.getElementById('days');
let sec = document.getElementById('sec');
let min = document.getElementById('min')
let hour = document.getElementById('hours')
function Timer(){
    let day = Math.floor(time / (24 *60*60));
    let hours = Math.floor(time % (24 *60*60)/(60*60))
    let minutes = Math.floor(time % (60*60)/60)
    let seconds = time%60
    days.textContent = `${String(day)}`
    hour.textContent = `${hour<10? String(hours).padStart(2,'0') : String(hours)}`
    min.textContent = `${min<10 ? String(minutes).padStart(2,'0'): String(minutes)}`
    sec.textContent = `${ seconds<10 ? String(seconds).padStart(2,'0'):String(seconds)}`
}

function countdown(){
    const updateTime = setInterval(() => {
        if(time<=0){
            days.textContent = '00'
            hour.textContent = '00'
            min.textContent = '00'
            sec.textContent = '00'
        }else{
            --time
        }
        Timer()
    }, 1000);
}
countdown()


    
})
