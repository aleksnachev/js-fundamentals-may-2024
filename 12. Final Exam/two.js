function translator (arr){

let inputs = Number(arr.shift())

let regex = /![A-Z][a-z]+[a-z]+!:/g

for (const token of arr) {
    
    
    if (token.match(regex)){
        
        let splittedToken = token.split(":")
        let message = splittedToken[1]
        
        let beg = splittedToken[0]
        let legthBeg = beg.length
        let fixedBeg = beg.substring(1,legthBeg-1)
        
        if (message.length-2 >= 8){
        
        let asciNums = []
        for (let i =1;i<message.length-1;i++){

            let char = message[i]
            let charAsci = char.charCodeAt()
            
            asciNums.push(charAsci)
            
            
        }
        
        console.log(`${fixedBeg}: ${asciNums.join(" ")}`);
        }else {
            console.log("The message is invalid");
        }
        
        
    }else {
        console.log("The message is invalid");
        
    }
    
}


}
translator 
// (["3",
//     "!play!:[TheNewSong]",
//     "!Ride!:[Bike]",
//     "!Watch!:[LordofTheRings]"])

    // (["3",
    //     "go:[outside]",
    //     "!drive!:YourCarToACarWash",
    //     "!Watch!:[LordofTheRings]"])
        