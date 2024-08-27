// Prelevo gli elementi dal DOM 
const cellRnd = document.querySelectorAll('.casual-numbers')
const userInput = document.querySelectorAll('.user-input')
let num = new Array(5)
// Funzione di avvio 
function Start() {
    // Azzero le celle
    userInput.forEach(input => input.value = "");
    for (let i = 0; i < num.length; i++) {
        num[i] = Rnd()
        console.log(num[i])
        cellRnd[i].innerHTML = num[i]
    }

    userInput.forEach(input => input.disabled = true);
    // Faccio partire un timer di 30 secondi e azzero e celle
    setTimeout(() => {
        for (let i = 0; i < num.length; i++) {
            cellRnd[i].innerHTML = '?'
        }
        userInput.forEach(input => input.disabled = false);
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
      let result = document.getElementById('result')
      let guessed = false

      for (let i = 0; i < userInput.length; i++) {
        const userValue = parseInt(userInput[i].value);
        const index = numRnd.indexOf(userValue);
        if (index !== -1) {
            counter++;
            numRnd[index] = null;
            guessed = true  
        } 
        guessed ? result.innerText = `Complimenti, hai indovinato ${counter} numeri!` :  result.innerText = `Ops!, non hai indovinato nessun numero!`
      }   
}

