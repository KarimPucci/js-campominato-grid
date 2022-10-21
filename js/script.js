/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const container = document.querySelector(".container");
const elementsPerRow = 10;
const nBox = document.getElementById('difficulty');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

 startButton.addEventListener('click', function(){
     container.innerHTML = '';
     for(let i = 0; i < nBox.value; i++){
         createSquare(i);
     }
})

resetButton.addEventListener('click', function(){
    nBox.value = '';
    container.innerHTML = '';
})


init(elementsPerRow);

function init(numElements){
    const totalSquares = Math.pow(numElements, 2);
    console.log(totalSquares);
    for( let i = 0; i < totalSquares; i++ ){
        createSquare(i);
    }
}

function createSquare(maxSquare){
    const square = document.createElement("div");
    square.className = "square";
    square.innerHTML = maxSquare + 1;
    square.idElement = maxSquare + 1;
    square.style.width = genCalcCss();
    square.style.height = genCalcCss();
    square.addEventListener("click",
    clickSquare)
    container.append(square);
}

function clickSquare(){
    console.log(this.idElement);
    this.innerHTML = this.idElement;
}

function genCalcCss(){
    return `calc(100% / ${elementsPerRow}`;
}

function livello(difficultyChosen){
    if (difficultyChosen === "hard") {
        return 10;
    }
    else if (difficultyChosen === "medium") {
        return 9;
    }
    else {
        return 7;
    }
}

function clickSquare(){
    this.classList.add('square-colore');
}