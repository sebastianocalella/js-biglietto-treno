let distance = prompt('Inserisci la distanza che desideri percorrere espressa in chilometri');
let age = prompt('inserisci la tua età')

console.log (distance);

let price = (distance * 0.21);

let finalPrice;

let sale;

if (age < 18){
    finalPrice = ((price / 100) * 80);
    sale = ((price / 100) * 20);
    document.getElementById('sale').innerHTML = 'In base ai dati forniti puoi beneficiare di uno sconto del 20% e risparmi ben: ' + sale.toFixed(2) + ' €!';
} else if (age > 65){
    finalPrice = ((price / 100) * 60);
    sale = ((price / 100) * 40);
    document.getElementById('sale').innerHTML = 'In base ai dati forniti puoi beneficiare di uno sconto del 40% e risparmi ben: ' + sale.toFixed(2) + ' €!';
} else {
    finalPrice = price;
}

finalPrice = finalPrice.toFixed(2);

document.getElementById('price').innerHTML = ' ' + finalPrice + ' €';
