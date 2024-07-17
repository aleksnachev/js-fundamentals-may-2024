// function numbers (string){
   
//     let arr = string.split(" ")
//     let sum = 0 

//     for (let i = 0 ; i<arr.length; i++){

//         let number = Number(arr[i])
//         sum += number
//     }

//     let average = sum / (arr.length)
    
//     let newArr = [];

//     for (let y= 0 ; y<arr.length; y++){

//         let number1=Number(arr[y])

//         if (number1 > average ){
//             newArr.push(number1)
//         }
//     }

//     // let result=newArr.sort((a,b) => b-a)
    
//     let maxNum = 0;

//     let finalArr = []

//     for (let z = 0; z < newArr.length; z++){

//         let num = Number(newArr[z])

//         if (num>maxNum){
//             maxNum = num;
//             if (finalArr.length<=5){
//                 finalArr.push(num)

//             }
//         }
//     }

//     if (finalArr.length === 0 ){
//         console.log("No");
//     }else {
//         console.log(finalArr.join(" "));
//     }
// }
// numbers ('5 2 3 4 -10 30 40 50 20 50 60 60 51');

function solve (string){

let arr = string.split(" ");
let sum=0
for (let i = 0; i<arr.length; i++){

    let number = Number (arr[i]);

    sum  += number

}

let average = sum/arr.length;

let result = arr.filter(filter)

function filter(n){

    if (n>average){
        return true
    }else {
        return false 

    }
}
if (result.length !== 0){
if (result.length<=5){
    let finalScore = result.sort((a,b) => b-a)
    console.log(finalScore.join(" "));
}else {
    let finalScore1=result.sort((a,b) => b-a)

            let result1=finalScore1.slice(0,5)
            console.log(result1.join(" "));
}
}else {
    console.log('No');
}
}
solve ('5 2 3 4 -10 30 40 50 20 50 60 60 51');