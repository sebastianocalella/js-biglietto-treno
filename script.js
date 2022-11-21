let distance = prompt('Inserisci la distanza che desideri percorrere espressa in chilometri');
let age = prompt('inserisci la tua età')

console.log (distance);

let price = (distance * 0.21);

let finalPrice;

if (age < 18){
    finalPrice = ((price / 100) * 80);
} else if (age > 65){
    finalPrice = ((price / 100) * 60);
} else {
    finalPrice = price;
}

finalPrice = finalPrice.toFixed(2);

document.getElementById('price').innerHTML = ' ' + finalPrice + ' €';
