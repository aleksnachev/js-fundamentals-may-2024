function computer (arr){

    let totalPrice = 0
    let totalPriceWithTax = 0
    let taxes = 0

    for (const token of arr) {
        if (token != "special" && token !="regular"){
            let money = Number(token)
            if (money<0){
                console.log("Invalid price!");
                continue;
            }
            totalPrice+=money
            totalPriceWithTax += 1.2*money
            taxes += 0.2*money
        }
        
    }

    if (arr.pop() == "special"){
        totalPriceWithTax *= 0.9
    }

    if (totalPriceWithTax == 0){
        console.log("Invalid order!");
    }else{
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
        
        
        
        
//         "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"

        
    }

}
computer ([
    'regular'
    ]
    
    )