// Your code here
//loads content in the DOM
//
document.addEventListener('DOMContentLoaded',main)

const charBar = document.getElementById("character-bar")
function fetchNames (){
    return fetch("http://localhost:3000/characters")
    .then((Response)=> Response.json())
    .then(nameBar)
    
    .catch(error => console.error("Error fetching character names:", error))
}
function nameBar(characters){
    characters.forEach(character => {
        const barSpan = document.createElement("span")
        barSpan.innerHTML = character.name
        charBar.appendChild(barSpan)

        barSpan.addEventListener("click", ()=>HandleClick(character))
    });
}


