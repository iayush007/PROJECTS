// all the buttons 
let button_classic = document.querySelector("#classic");
let button_favorite = document.querySelector("#favorite");
let button_spicy = document.querySelector("#spicy");
let button_vegetarian = document.querySelector("#vegetarian");
let button_all = document.querySelector("#all");


//all the pizza
let all_pizza=document.querySelectorAll(".cardPizza");
let all_pizza_classic = document.querySelectorAll(".classic");
let all_pizza_spicy = document.querySelectorAll(".spicy");
let all_pizza_favorite = document.querySelectorAll(".favorite");
let all_pizza_vegetarian = document.querySelectorAll(".vegetarian");

class UI{
    
    
    static displayAllPizza(){
        for(let k=0;k<all_pizza.length;k++){
            all_pizza[k].style.display='initial';
        }
    }
    
    static hideAllPizza(){
        for(let k=0;k<all_pizza.length;k++){
            all_pizza[k].style.display='none';
        }
    }
    
    
    static displayOnlyClassic(){
        for(let k=0;k<all_pizza_classic.length;k++){
             all_pizza_classic[k].style.display='initial';
        }
    }
    
    static displayOnlyFavorite(){
          for(let k=0;k<all_pizza_favorite.length;k++){
             all_pizza_favorite[k].style.display='initial';
        }
    }
    
    
    static displayOnlySpicy(){
        for(let k=0;k<all_pizza_spicy.length;k++){
             all_pizza_spicy[k].style.display='initial';
        }
    }
    
    static displayOnlyVegetarian(){
        for(let k=0;k<all_pizza_vegetarian.length;k++){
             all_pizza_vegetarian[k].style.display='initial';
        }
    }
    
    
    
}

//display only classic pizza
button_classic.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.hideAllPizza();
    UI.displayOnlyClassic();
})

//display only favorite 
button_favorite.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.hideAllPizza();
    UI.displayOnlyFavorite();
})

//display on spicy 
button_spicy.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.hideAllPizza();
    UI.displayOnlySpicy();
})

//display only vegetarian
button_vegetarian.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.hideAllPizza();
    UI.displayOnlyVegetarian();
})

//display all 
button_all.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.displayAllPizza();
})


