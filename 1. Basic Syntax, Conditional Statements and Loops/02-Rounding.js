function rounding (num , percision){

    if (percision >15){
        percision=15;
    }

let roundedNum=num.toFixed(percision);
let trimmedNum=parseFloat(roundedNum);

console.log(trimmedNum);
}
rounding (3.1415926535897932384626433832795,2)