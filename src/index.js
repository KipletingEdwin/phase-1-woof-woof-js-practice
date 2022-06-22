//declaring variables
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then((dogInfo)=> dogInfo.forEach(dogs => showNames(dogs)))
})

function showNames(dogs){
    let dogNames = document.createElement('span')
    dogNames.innerHTML = `${dogs.name}`
    document.getElementById('dog-bar').appendChild(dogNames)
    dogNames.addEventListener('click', () =>{
        displayDogInfo(dogs)
    })
}

function displayDogInfo(data){
    console.log(data.name)
    console.log(data.isGoodDog)
    const dogInfo = document.getElementById('dog-info')
    dogInfo.innerHTML = `
    <img src="${data.image}" alt="">
    <h2>${data.name}</h2>
    <button>${data.isGoodDog}</button>
    ` 
}