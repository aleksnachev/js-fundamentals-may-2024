function oddOccurrences (string){

let stringAsArr = string.toLowerCase().split(" ")
let finalObj = {}
let finalArr = []
for (const token of stringAsArr) {
    
    if(token in finalObj){
        finalObj[token] +=1
    }else {
        finalObj[token] = 1
    }
}

for (const key in finalObj) {
    if (finalObj[key] % 2 === 1){
        finalArr.push(key)
    }
}

console.log(finalArr.join(" "));
}