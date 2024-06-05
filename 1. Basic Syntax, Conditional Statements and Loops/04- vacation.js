//              Friday	    Saturday	Sunday
// Students	    8.45	    9.80	    10.46
// Business	    10.90	    15.60	    16
// Regular	    15	        20          22.50


function vacation (peopleCount, group, day){

let personPrice=0;
let price=0;

switch (day){
    
    case 'Friday':
        if (group === 'Students'){
                personPrice=8.45;
            
        }else if (group === 'Business'){
                personPrice=10.9;

        }else if (group === 'Regular'){
                personPrice=15;
        }
        
        break;

    case 'Saturday':
        if (group === 'Students'){
            
                personPrice=9.8;

        }else if (group === 'Business'){
                personPrice=15.6;
        }else if (group === 'Regular'){
            
                personPrice=20;
        
        }
        break;
    
    case 'Sunday':
        if (group === 'Students'){
            
             personPrice=10.46;
            
        }else if (group === 'Business'){
            personPrice=16;
        }else if (group === 'Regular'){
            
                personPrice=22.5;
        
        }
        break;


}

price=peopleCount*personPrice;

if (group==='Students' && peopleCount>=30){
    price *= 0.85;
}

if (group === 'Business' && peopleCount>= 100){
    price = (peopleCount-10)*personPrice
}

if (group === 'Regular' && peopleCount>= 10 && peopleCount<= 20){
    price *= 0.95;
}

console.log(`Total price: ${price.toFixed(2)}`);

}
vacation (40,
    "Regular",
    "Saturday"
    );