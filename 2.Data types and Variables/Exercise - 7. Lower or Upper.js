function lowerOrUpper (string){

let stringAskii=string.charCodeAt();


if (stringAskii>= 65 && stringAskii<=90){
    console.log("upper-case");
}else {
    console.log("lower-case");
}
// 65-90
}
lowerOrUpper ('L');