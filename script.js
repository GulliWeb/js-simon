// Prelevo gli elementi dal DOM 
const cellRnd = document.querySelectorAll('.casual-numbers')
const userInput = document.querySelectorAll('.user-input')
let num = new Array(5)
// Funzione di avvio 
function Start() {
    for (let i = 0; i < num.length; i++) {
        num[i] = Rnd()
        console.log(num[i])
        cellRnd[i].innerHTML = num[i]
    }
    // Faccio partire un timer di 30 secondi e azzero e celle
    setTimeout(() => {
        for (let i = 0; i < num.length; i++) {
            cellRnd[i].innerHTML = '?'
        }
    }, 3000);
    return num
}

// Funzione che genera numeri random
function Rnd() {
return Math.floor(Math.random() * 99) + 1
}

function guessRnd() {
      // Chiedo all'utente di indovinare i cinque numeri 
      let counter = 0 
      let numRnd = num

      for (let i = 0; i < num.length; i++) {
      // Controllo quali e quanti numeri l'utente ha indovinato
          if (userInput[i].value == numRnd[i]) counter++
      }   
      console.log(`Complimenti! hai indovinato ${counter} numeri !`)
}

