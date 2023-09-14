const createCell = function (){
    const divCells = document.getElementById('divCells')
    for (let i=0; i<76; i++){
        const singleCellDiv = document.createElement('div')
        singleCellDiv.classList.add('cell')
        divCells.appendChild(singleCellDiv)  
        
        const par = document.createElement('p')
        par.classList.add('par')
        singleCellDiv.appendChild(par)
        par.innerText = i + 1
    }
}

createCell()

const createDivButton = function (){
    const newDiv = document.createElement('div')
    newDiv.classList.add('newDivButton')
    newDiv.innerHTML = `
    <button id="button">Clicca qui!</button>
    `
    divCells.appendChild(newDiv)
    console.log(newDiv)
}

createDivButton()

const selectButton = function(){
    const getButton = document.getElementById('button')
    getButton.addEventListener('click', function(e){
        // e.preventDefault()
        const numbRandom = Math.floor(Math.random()*76 + 1) 
        console.log(numbRandom)
        const  allCells = document.querySelectorAll('.cell p')
        console.log(allCells)
        for (let i=0; i<allCells.length; i++){
         if (numbRandom === parseInt(allCells[i].innerText)){
             allCells[i].parentElement.style.backgroundColor = 'black'
         }
        }
     })
}

selectButton()