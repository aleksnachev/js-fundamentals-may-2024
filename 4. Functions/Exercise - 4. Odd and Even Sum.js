// even-chetno
// odd

function solve (num){


        let evenSum1=0;
        let oddSum=0
        let numToString = num + '';

        for (let i=0;i<numToString.length;i++){

            const number = Number(numToString[i]);

            if (number % 2 === 0){
                evenSum1+=number;
            }else {
                oddSum+=number
            }
        }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum1}`);

}
solve (1000435);