function pascal (str){


let pattern = /[A-Z][a-z]*/g;
let allMatches = str.matchAll(pattern)
let matchWords = []

for (const matchObj of allMatches) {
    
    matchWords.push(matchObj[0])
}
console.log(matchWords.join(", "));
}
pascal()