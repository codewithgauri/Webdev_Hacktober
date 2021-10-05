const slider = document.querySelector(".slider");

// "Previous" and "Next" button
const prev = slider.querySelector("#prevPicture");
const next = slider.querySelector("#nextPicture");

const mySlides = slider.querySelectorAll("li");

// index of the image currently displayed on screen
let indexOfImg = 0;
mySlides[indexOfImg].className = "visible";


let list = [];
mySlides.forEach(function(el) {
    list.push(el);
})
console.log(list);

list[0].className = "visible";


// Adding "visible" class
function makeItVisible(a) {
    list[a].className = "visible";
}

// Removing "visible" class
function makeItInvisible(b) {
    list[b].className = "";
}

// "Click" events:
// Previous image
prev.addEventListener("click", function () {
    indexOfImg--;
    if (indexOfImg < 0) {
        indexOfImg = list.length-1
        makeItInvisible(0);
        makeItVisible(indexOfImg);
    } else {
        makeItInvisible(indexOfImg+1);
        makeItVisible(indexOfImg);
    }
})

// Next image
next.addEventListener("click", function () {
    indexOfImg++;
    if (indexOfImg >= list.length) {
        indexOfImg = 0;
        makeItInvisible(list.length-1);
        makeItVisible(indexOfImg);
    } else {
        makeItInvisible(indexOfImg-1);
        makeItVisible(indexOfImg);
    }
})

