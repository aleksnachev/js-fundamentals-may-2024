function store (arr){

let i=0;
let totalPrice=0
let priceWithouTaxes = 0;
let taxes = 0;
    while (arr[i] !== 'special' && arr[i] !== "regular"){

        let priceWithoutTax = Number(arr[i])
        let priceWithTax=priceWithoutTax*1.20;
        let tax = priceWithoutTax*0.2

        if (priceWithoutTax < 0 ){
            console.log("Invalid price!");
            
        }

        if (priceWithTax>0){
            totalPrice += priceWithTax
        priceWithouTaxes += priceWithoutTax
        taxes += tax
        }
        i++;
    }
    if (totalPrice<=0){
        console.log("Invalid order!");
        return
    }

    if((arr[arr.length-1]) === 'special'){
        totalPrice *= 0.9
    }

// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"

console.log("Congratulations you've just bought a new computer!");
console.log(`Price without taxes: ${priceWithouTaxes.toFixed(2)}$`);
console.log(`Taxes: ${taxes.toFixed(2)}$`);
console.log("-----------");
console.log(`Total price: ${totalPrice.toFixed(2)}$`);

    
}
store([
    "1023"
    ,"15"
    ,"-20"
    ,"-5.50"
   ,"450"
    ,"20"
    ,"17.66"
    ,"19.30"
    ,"regular"
    ]
    )