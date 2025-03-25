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
const charInfo = document.getElementById("detailed-info")
function fetchDetails (){
    return fetch(`http://localhost:3000/characters/${character.id}`)
    .then((res)=>res.json())
    .then(HandleClick)
    .catch(error => console.error("Error fetching character details:", error))
}
function HandleClick(character){
 const characterName = document.getElementById("name")
 characterName.innerHTML = character.name

 const characterImg = document.querySelector("#detailed-info img")
 characterImg.src = character.image
 characterImg.alt = character.name
 
 const characterVotes = document.getElementById("vote-count")
 characterVotes.textContent = character.votes
} 

