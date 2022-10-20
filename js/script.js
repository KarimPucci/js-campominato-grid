/***Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

const container = document.querySelector(".container");
const elementsPerRow = 10;
//in questo array salvo tutti gli id estratti per il controllo di univocità
const randomIds =[]

init(elementsPerRow);

function init(numElements){
    const totalSquares = Math.pow(numElements, 2);
    console.log(totalSquares);
    for( let i = 0; i < totalSquares; i++ ){
        createSquare(totalSquares);
    }
}

function createSquare(maxSquare){
    //crea il quadratino
    //lo valorizza
    //lo appende al container
    const square = document.createElement("div");
    square.className = "square";
    //creo una proprietà custom di square dove gli salvo il numero del quadratino
    const randomId =getRandomNUmber(1, maxSquare);
    square.idSq = randomId
    square.innerHTML = randomId
    square.addEventListener("click",
    clicksquare)
    container.append(square);
}

function clicksquare(){
//ottengo l'elemento html che ha scatenato l'evento
    console.log(this.idSq);
    this.innerHTML = this.idSq;
//con l'operatore ternario filtro la classe da aggiungere
    this.classList.add((this.idSq % 2) ? "odd" : "even")
}

function getUniqueRandomNUmber(numElements){
    let randomId = getRandomNUmber(1, numElements);
    while(!randomIds.includes(randomId)){
    randomId = getRandomNUmber(1, numElements);
}
    randomIds.push(randomId);
    return randomId;
}

function getRandomNUmber(min,max){
    return Math.floor(Math.random()* (max - min +1)) + min;
}