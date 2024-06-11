function solve (num){

let numToString=num + '';
let sum=0;
for (let i=0; i<numToString.length; i++){

    let digit = Number(numToString[i]);

    sum += digit
}

console.log(sum);
}
solve (245678);