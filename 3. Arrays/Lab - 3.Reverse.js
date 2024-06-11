function solve(num,firstArr) {
    
let newArr = [];
for (let i=0; i<num; i++){
    newArr[i] = firstArr[i];
}
let output=""
for (let a = newArr.length-1; a>=0; a--){
    output += ` ${newArr[a]}`
}
console.log(output);
}
solve (3, [10, 20, 30, 40, 50]);
solve (4, [-1, 20, 99, 5]);