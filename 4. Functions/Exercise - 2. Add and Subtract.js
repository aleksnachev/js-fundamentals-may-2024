function solve (num1,num2,num3){

    function sum (x,y){
        return x+y;
    }

    function subtract (x,y){
        return x-y
    }

    let su1m = sum(num1,num2);
    let result = subtract (su1m, num3 )

    console.log(result);
}