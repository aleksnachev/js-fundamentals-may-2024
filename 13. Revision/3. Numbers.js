function solve (string){

    let arr = string.split(" ");
    let sum=0
    for (let i = 0; i<arr.length; i++){
    
        let number = Number (arr[i]);
    
        sum  += number
    
    }
    
    let average = sum/arr.length;
    
    let result = arr.filter(filter)
    
    function filter(n){
    
        if (n>average){
            return true
        }else {
            return false 
    
        }
    }
    if (result.length !== 0){
    if (result.length<=5){
        let finalScore = result.sort((a,b) => b-a)
        console.log(finalScore.join(" "));
    }else {
        let finalScore1=result.sort((a,b) => b-a)
    
                let result1=finalScore1.slice(0,5)
                console.log(result1.join(" "));
    }
    }else {
        console.log('No');
    }
    }

solve ()
    
