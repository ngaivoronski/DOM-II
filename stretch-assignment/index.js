let blockGroup =  document.querySelector('.blocks');

let block = document.querySelectorAll('.block');

// Add clicked block to top
block.forEach(function(elem) {
    elem.addEventListener("click", () => {
        blockGroup.prepend(elem);
    })
})

// Block Movement
block.forEach(function(elem) {
    elem.addEventListener("mousedown", () => movement(elem));
    elem.addEventListener("mouseup", () => stop(elem));
    elem.addEventListener("mouseout", () => stop(elem));
})

// Declare "move" variable
var move;

// Move right
function movement(elem) {
    move = setInterval(function() {
        TweenMax.to(elem, .1, {x: "+=5"});
    }, 10)
}

// Stop movement and return to original position
function stop(elem) {
    if (move) {
        clearInterval(move);
        TweenMax.to(elem, 3, {x: 0});
    };
}