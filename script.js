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
}

// Funzione che genera numeri random
function Rnd() {
return Math.floor(Math.random() * 99) + 1
}



