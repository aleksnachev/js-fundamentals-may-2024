function fassword (password){


    function length (pass){
      

        if (pass.length >= 6 && pass.length <= 10 ){
            return true
        }else {
            console.log("Password must be between 6 and 10 characters");
            return false
        }
    }

    function two (pass){
        let trueI = 0;
        for (let i=0;i<pass.length;i++){
            

            // 48-57
            // 65-90
            // 97-122

            const code = pass.charCodeAt(i);
            
            if ((code >= 48 && code <= 57) || (code >=65 && code <=90) || (code >= 97 && code <= 122)){
                trueI ++;
            } else {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true;
    }

    function digits (pass){
        let digitsCount=0;
        for (let i =0; i<pass.length; i++){

            let code = pass.charCodeAt(i);

            if (code >= 48 && code <= 57){
                digitsCount++;
            }

        }

        if (digitsCount < 2){
            console.log("Password must have at least 2 digits");
            return false;
        }else {
            return true
        }
    }
    
    let result1 = length(password);
    let result2 = two(password);
    let result3 = digits (password);

    if (result1===true && result2===true && result3===true){
        console.log("Password is valid");
    }

}
fassword ('Pa$s$s');