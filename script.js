// Prelevo gli elementi dal DOM 
const cellRnd = document.querySelectorAll('.casual-numbers')
// Funzione di avvio 
function Start() {
    let num = new Array(5)
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
       
    // Chiedo all'utente di indovinare i cinque numeri 
        let counter = 0 

        for (let i = 0; i < num.length; i++) {
            let userInput = parseInt(prompt('Inserisci i cinque numeri che hai visto! numero' + (i + 1) ))
        // Controllo quali e quanti numeri l'utente ha indovinato
            if (userInput == num[i]) {
                counter++
            }
        }
        console.log('Complimenti! hai indovinato' + counter + 'numeri !')
    }, 3000);}


// Funzione che genera numeri random
function Rnd() {
return Math.floor(Math.random() * 99) + 1
}



