/*const characterList=document.getElementById("list")
const unordered=document.createElement('ul')

function get(){
    fetch(' http://localhost:3000/characters')
    .then((res)=>res.json())
    .then(data =>(
        data.forEach(element=>{
            let elee=element.name
            const li=document.createElement('li')
            const p=document.createElement('p')
            p.textContent=elee
            li.appendChild(p)
            unordered.appendChild(li)
            characterList.append(unordered)
            console.log (unordered)

            function callBack(element){
                console.log(`${element.image}:${element.votes}`) 

            }
    
        })
    )
)}
get() */

fetch(' http://localhost:3000/characters')
.then(res=>res.json())
.then(characters =>{
    const AnimalList= document.getElementById("animal_list")
    characters.forEach(character =>{
        const animalName=
        document.createElement('li')
         animalName.innerText=character.name
         AnimalList.appendChild(animalName)
animalName.addEventListener('click', ()=>{
    fetch(`http://localhost:3000/characters/${character.id}`)
    .then(res =>res.json())
    .then(animalDetails =>{
        const animalDetailsContainer=
        document.getElementById('animal_details')
        animalDetailsContainer.innerHtml=''
        const animalImage=document.createElement('img')
        animalImage.src=
        animalDetails.image 
        const animalVotes=document.createElement('p')
        animalVotes.innerText=`Votes: ${animalDetails.votes}`
        animalDetailsContainer.appendChild(animalImage)
        animalDetailsContainer.appendChild(animalVotes)

        const voteButton=document.createElement('button')
        voteButton.innerText='Vote for this animal'
        voteButton.addEventListener('click', () => {
            animalDetails.votes++
            animalVotes.innerText=` Votes: ${animalDetails.votes}`
        })
        animalDetailsContainer.appendChild(voteButton)

    })
    .catch(error =>console.error(error))

})
    })
})
.catch(error => console.error(error))