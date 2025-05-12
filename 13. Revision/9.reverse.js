function reverse (arr){

    let username = arr.shift()
    let usernameReversed = username.split("").reverse().join("")
    let counterFailed = 0
    for (const token of arr) {
        
        
        if (token==usernameReversed){
            console.log(`User ${username} logged in.`);
            return;
        }else{
            counterFailed++
            if (counterFailed == 4){
                console.log(`User ${username} blocked!`)
                return;
            }
            console.log("Incorrect password. Try again.")
        }
    }


}
reverse(['sunny','rainy','cloudy','sunny','not sunny'])