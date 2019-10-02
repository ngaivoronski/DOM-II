// Your code goes here

// Image resizing
var bodyImages = document.querySelectorAll("img");

bodyImages.forEach(function(elem) {
    elem.addEventListener("mouseenter", () => {
    elem.style.transform = "scale(1.1)";
    elem.style.transition = "0.15s";})
    }
)

bodyImages.forEach(function(elem) {
    elem.addEventListener("mouseleave", () => {
    elem.style.transform = "scale(1.0)";
    elem.style.transition = "0.15s";})
    }
)

// Image removal
bodyImages.forEach(function (elem) {
    elem.addEventListener("click", () =>{
        elem.style.display = "none";
    })
})

// Flashy header
var topHeader = document.querySelector("header");

function generateHex() {
    var newColor = '#';
    var digits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    for (i=0; i < 6; i++) {
        newColor = newColor + (digits[Math.round(Math.random()*15)]);
    }
    return newColor;
}

topHeader.addEventListener("click", () => {
    var generatedColor = generateHex();
    topHeader.style.backgroundColor = generatedColor;
})

// Flashy Logo - STOP PROPOGATION
var topLogo = document.querySelector(".logo-heading");

topLogo.addEventListener("click", () => {
    var generatedColor = generateHex();
    topHeader.style.color = generatedColor;
    event.stopPropagation();
})

// Navbar rotate
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(elem => {
    var currentRotation = 0;
    elem.addEventListener("keydown", key =>{
        if (key.code === 'ArrowRight') {
            currentRotation = currentRotation + 15;
        }
        else if (key.code === 'ArrowLeft') {
            currentRotation = currentRotation - 15;
        }
        
        elem.style.transform = 'rotate(' + currentRotation + 'deg)';
    })
})

// Navbar prevent refresh - PREVENT DEFAULT
navLinks.forEach(elem => {
    elem.addEventListener("click", key =>{
    event.preventDefault();
    })
})


// Bold Headings
var bodyHeadings = document.querySelectorAll("h2, h4");

bodyHeadings.forEach(function(elem) {
    elem.addEventListener("click", () => {
    elem.style.fontWeight = "bold";})
    }
)

// Flip buttons
var bottomButtons = document.querySelectorAll(".btn");

bottomButtons.forEach(function(elem) {
    elem.addEventListener("mouseenter", () => {
    elem.style.transform = "rotate(180deg)";
    })
    elem.addEventListener("mouseleave", () => {
        elem.style.transform = "rotate(0deg)";
        })
})

// Footer size - using GSAP
var bottomBar = document.querySelector("footer");

console.log(bottomBar);
var bottomExpand = 0;

bottomBar.addEventListener("click", () =>{
        TweenMax.to("footer", 1, {scale: 2, yoyo: true, repeat: 1});
    
})

// Flash background of Window - using GSAP
window.addEventListener("scroll", () => {
    TweenMax.fromTo("body", .5, {backgroundColor: "white"}, {backgroundColor: "gray", yoyo: true, repeat: 1});
})


// Restore
var background = document.querySelector("body");
background.addEventListener("keydown", key => {
    if (key.code === "Escape") {
        bodyImages.forEach(function (elem) {
            elem.style.display = "block";
        })
        bodyHeadings.forEach(function(elem) {
            elem.style.fontWeight = "normal";
        })
        navLinks.forEach(elem => {
                elem.style.transform = 'rotate(0deg)';
        })
        topHeader.style.background = "white";
        topLogo.style.color = "black";
        TweenMax.to("body", .01, {backgroundColor: "white"});
    }

})

// Console log your key
background.addEventListener("keydown", key => {
    console.log(`You pressed the ${key.code} key.`);
})