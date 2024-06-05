function triangle (num){

let logcount=0;
let curcount=0;
let output=""
for (let a=1; a<= num; a++){
logcount = a;
while (curcount<logcount){
    output += `${a} `
    curcount++
    if (curcount===logcount){
        curcount=0;
        break;
    }
   
}
console.log(output);
output="";
}


}
triangle (3);