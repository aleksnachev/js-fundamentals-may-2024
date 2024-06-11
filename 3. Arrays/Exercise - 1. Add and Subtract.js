// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Write a function, which changes the value of odd and even numbers in an array of numbers. 
function solve (arr){
    let newArr=[]
    let sum=0;
    let newSum=0;
    for (let i=0; i<arr.length; i++){

        let num=arr[i]
        let newNum = 0;
        if (num % 2 === 0){
            newNum= num+i
        }else {
            newNum = num-i
        }

        newArr.push(newNum)
        sum+=num;
        newSum+=newNum;
    }
console.log(newArr);
console.log(sum);
console.log(newSum);
}
solve ([5, 15, 23, 56, 35]);