const spaces = document.querySelectorAll(".space")
const title = document.getElementById('title')

let currentPlayer = "X"

/**
 * @param {HTMLElement} space 
 */

function printPlayer(space){
    if(space.innerHTML) {
        return alert("occupied space!!")
    }

    space.innerHTML = currentPlayer
    currentPlayer = currentPlayer == "X" ? "O" : "X"
}

spaces.forEach(space => {
    space.addEventListener("click", (e)=> printPlayer(e.target))
})
title.addEventListener("click", ()=> location.reload())