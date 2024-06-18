function solve (arr){


    function checkIfPalindrome (num) {
        
        let numString = num + '';
        let numStringReversed="";

        for (let i=numString.length-1;i>=0;i--){

            let curChar=numString[i]
            numStringReversed+=curChar;
        }

        if (numStringReversed===numString){
            return true;
        }else {
            return false;
        }
    }

    for (const num of arr){
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }
}