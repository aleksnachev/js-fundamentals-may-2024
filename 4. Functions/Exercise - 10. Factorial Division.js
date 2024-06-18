function solve (num1, num2){

    function factorial (num){
        let factorial1=1;

        for (let factor =2; factor<= num; factor ++){
            factorial1 *= factor
        }
        return factorial1;
    }

    const factorial1 = factorial (num1);
    const factorial2 = factorial (num2);

    const quotient = factorial1/factorial2;
    console.log(quotient.toFixed (2));
}

solve (5,2);