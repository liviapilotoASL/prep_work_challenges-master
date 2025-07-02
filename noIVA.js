// write a function noIVA which calculates the price without IVA which is 21%
// it takes one argument which is a number for total price with IVA
// and returns the number representing the price without IVA

// function takes 1 argument
// argument is a total price with IVA
// function subtracts iva from total price
// returns the price without iva

noIva(242) 
// returns
//200

function noIva(totalPriceWithIva) {
    const ivaRate = 0.21; // 21% IVA
    const priceWithoutIva = totalPriceWithIva / (1 + ivaRate);
    return Math.round(priceWithoutIva);
}

console.log(noIva(242)); // 200
console.log(noIva(121)); // 100
console.log(noIva(60.5)); // 50