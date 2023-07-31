document.addEventListener("DOMContentLoaded", function(){
 
    
    
    console.log("hi")
})


function createGrid() {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        grid.insertAdjacentElement("beforeend", div)
    }


}