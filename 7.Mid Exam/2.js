function taxes (arr){

let allComands= arr[0];
let totalTax=0;
let allCom = allComands.split(">>")

for (let i = 0; i< allCom.length; i++){
    

    let command = allCom[i].split(" ")
    
    let carType = command.shift();
    let years = Number(command.shift());
    let km = Number (command.shift());

    switch (carType){

        case 'family':

                
 
                let tax = (Math.floor(km/3000) *12) + (50 - years*5)
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTax+=tax

            break;
        
        case 'heavyDuty':

                let tax1 = (80 - years*8) + (Math.floor(km/9000) * 14)
                console.log(`A ${carType} car will pay ${tax1.toFixed(2)} euros in taxes.`);
                totalTax+=tax1
            break;

        case "sports" :

                let tax2 = (100 - years*9) + (Math.floor(km/2000) * 18)
                console.log(`A ${carType} car will pay ${tax2.toFixed(2)} euros in taxes.`);
                totalTax+=tax2
            break;

        default : 
        console.log("Invalid car type.");
            break;

                
    }


}
    
console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);

}
taxes (([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]))