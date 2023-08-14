const price1 = document.getElementById("price-1");
const growthButton1 = document.getElementById("growth-button-1");
const decreaseButton1 = document.getElementById("decrease-button-1");
const price2 = document.getElementById("price-2");
const growthButton2 = document.getElementById("growth-button-2");
const decreaseButton2 = document.getElementById("decrease-button-2");
const price3 = document.getElementById("price-3");
const growthButton3 = document.getElementById("growth-button-3");
const decreaseButton3 = document.getElementById("decrease-button-3");
const resetButton = document.getElementById("reset-button");

let priceValue1 = 0;
let priceValue2 = 0;
let priceValue3 = 0;
growthButton1.addEventListener("click", function () {
    if (priceValue1 === 30) {
        return alert("you aren't More than that growth now")
    }
    priceValue1 += 1;
    price1.innerText = priceValue1;
})
decreaseButton1.addEventListener("click", function () {
    if (priceValue1 === 0) {
        return alert("yor can't provide negative number")
    }
    priceValue1 -= 1;
    price1.innerText = priceValue1
})

growthButton2.addEventListener("click", function () {
    if (priceValue2 === 20) {
        return alert("you aren't More than that growth now")
    }
    priceValue2 += 1;
    price2.innerText = priceValue2;
})
decreaseButton2.addEventListener("click", function () {
    if (priceValue2 === 0) {
        return alert("yor can't provide negative number")
    }
    priceValue2 -= 1;
    price2.innerText = priceValue2
})
growthButton3.addEventListener("click", function () {
    if (priceValue3 === 15) {
        return alert("you aren't More than that growth now")
    }
    priceValue3 += 1;
    price3.innerText = priceValue3;
})
decreaseButton3.addEventListener("click", function () {
    if (priceValue3 === 0) {
        return alert("yor can't provide negative number")
    }
    priceValue3 -= 1;
    price3.innerText = priceValue3;
})

resetButton.addEventListener("click", function () {
    price1.innerText = 0;
    price2.innerText = 0;
    price3.innerText = 0;
    priceValue1 = 0;
    priceValue2 = 0;
    priceValue3 = 0;
})



const quotes = [
    {
        quote:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person:
            "Ralph Waldo Emerson"
    },
    {
        quote:
            "The only way to do great work is to love what you do.",
        person:
            "Steve Jobs"
    },
    {
        quote:
            "The future belongs to those who believe in the beauty of their dreams.",
        person:
            "Eleanor Roosevelt"
    },
    {
        quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person:
            "Winston Churchill"
    },
    {
        quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
        person:
            "Robert Frost"
    },
    {
        quote:
            "The only thing we have to fear is fear itself.",
        person:
            "Franklin D. Roosevelt"
    },
    {
        quote:
            "Life is what happens when you're busy making other plans.",
        person:
            "John Lennon"
    },
    {
        quote:
            "The best way to predict the future is to create it.",
        person:
            "Peter Drucker"
    },
    {
        quote:
            "The journey of a thousand miles begins with one step.",
        person:
            "Lao Tzu"
    },
    {
        quote:
            "I have not failed. I've just found 10,000 ways that won't work.",
        person:
            "Thomas Edison"
    }
];

document.getElementById("quote-btn").addEventListener("click", function(){
    const h2 = document.getElementById("quote-text");
    const p = document.getElementById("person-name");
    const randomQuotes = Math.floor(Math.random()*quotes.length)
    h2.innerText = quotes[randomQuotes].quote;
    p.innerText = quotes[randomQuotes].person;
})

 
const myButton = document.getElementById('dance');
myButton.addEventListener('click', () => {
    myButton.style.display = 'none';
});

myButton.addEventListener("click", function () {
const audioMusic = document.getElementById("audio-music");
audioMusic.play()
const myElement = document.getElementById("images-section");
myElement.className = "banner-section"
myElement.style.backgroundImage = "url('https://i.pinimg.com/originals/2b/9d/f5/2b9df5c13804a6e5f12ecdd94691e9a6.gif?fbclid=IwAR1c1GcIcKKwqwUzDGkMdPkVi8-PRokdnY3Na-0YCuYMIDqpJ8qreJLlqI0')"
myElement.style.backgroundRepeat = "no-repeat"

})


