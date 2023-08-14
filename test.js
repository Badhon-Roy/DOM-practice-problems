const price1 = document.getElementById("price-1");
const growthButton1  = document.getElementById("growth-button-1");
const decreaseButton1 = document.getElementById("decrease-button-1");
const price2 = document.getElementById("price-2");
const growthButton2  = document.getElementById("growth-button-2");
const decreaseButton2 = document.getElementById("decrease-button-2");
const price3 = document.getElementById("price-3");
const growthButton3  = document.getElementById("growth-button-3");
const decreaseButton3 = document.getElementById("decrease-button-3");
const resetButton = document.getElementById("reset-button");

let priceValue1= 0;
let priceValue2= 0;
let priceValue3= 0;
growthButton1.addEventListener("click", function(){
    if(priceValue1===30){
        return alert("you aren't More than that growth now")
    }
    priceValue1 += 1;
    price1.innerText = priceValue1;
})
decreaseButton1.addEventListener("click", function(){
    if(priceValue1===0){
        return alert ("yor can't provide negative number")
    }
    priceValue1 -= 1;
    price1.innerText = priceValue1
})

growthButton2.addEventListener("click",function(){
    if(priceValue2 ===20){
        return alert ("you aren't More than that growth now")
    }
    priceValue2 += 1;
    price2.innerText = priceValue2;
})
decreaseButton2.addEventListener("click", function(){
    if(priceValue2===0){
        return alert ("yor can't provide negative number")
    }
    priceValue2 -= 1;
    price2.innerText = priceValue2
})
growthButton3.addEventListener("click",function(){
    if(priceValue3 ===15){
        return alert ("you aren't More than that growth now")
    }
    priceValue3 += 1;
    price3.innerText = priceValue3;
})
decreaseButton3.addEventListener("click", function(){
    if(priceValue3===0){
        return alert ("yor can't provide negative number")
    }
    priceValue3 -= 1;
    price3.innerText = priceValue3;
})

resetButton.addEventListener("click",function(){
    price1.innerText = 0;
    price2.innerText = 0;
    price3.innerText = 0;
    priceValue1 = 0;
    priceValue2 = 0;
    priceValue3 = 0;
})


