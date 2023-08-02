let color = 'black';
let click = false;


document.addEventListener("DOMContentLoaded", function(){
 
    document.querySelector('body').addEventListener('click', function(e){
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector('#draw');
            if (click) {
                draw.innerHTML = "Now you can draw"
            }
            else {
                draw.innerHTML = "No drawing allowed"
            }

        }
    })
    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener('click', function(){
        let size = getInput();
        createGrid(size);
    })
    
})


function createGrid(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)

        grid.insertAdjacentElement("beforeend", div)
        }

        
            
        
        
        
    }





function getInput() {
    let input = prompt("Enter a number")
    let message = document.querySelector("#message")
    if (input == "") {
        message.innerHTML = "Please provide a number"
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else {
        message.innerHTML = "Now you can play"
        return input;
    }

    }

    function colorDiv() {
       if(click) {
        if (color == 'random'){

            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black';
        }

    }
}
    function setColor(colorChoice) {

    
     color = colorChoice;

    }
    function resetGrid(){
        let divs = document.querySelectorAll('div')
        divs.forEach(div => div.style.backgroundColor = 'white')
    }


   
