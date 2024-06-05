

function calculator (input){

let first = Number(input[0]);
let second=Number(input[2]);
let go = input[1];


if (go === "+"){
    console.log(first+second)
}

if (go=== "-"){
    console.log(first-second)
}

if (go=== "*" || go === "."){
    console.log(first*second);
}

if (go === "/" ){
    console.log(first/second)
}



}
calculator ([8,'-',3]);