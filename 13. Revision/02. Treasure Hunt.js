function treasureHunt (arr){

    let loot = arr.shift()
    let splittedLoot = loot.split("|")
    
    for (const token of arr) {
        if (token == "Yohoho!"){
            break
        }
        let splittedToken = token.split(" ")
        let command = splittedToken.shift()

        if (command == "Loot"){
            for (const t2 of splittedToken) {
                if (!splittedLoot.includes(t2)){
                    splittedLoot.unshift(t2)
                }
            }
            
        }else if (command == "Drop"){
            let index = Number(splittedToken[0])
            let askedToken = splittedLoot[index]
            // if (askedToken!= NaN){
                splittedLoot.splice(index,1)
                splittedLoot.push(askedToken)
            // }
              
        }
        else if (command == "Steal"){
            let num = Number(splittedToken[0])
            let length = splittedLoot.length;
            console.log(num);
            console.log(length);
            
            
            if (num>length){
                splittedLoot = []
            } else if (num == length){

                
                let newArr = splittedLoot
                console.log(newArr.join(", "));
                // splittedLoot.splice(length-num,num)
                // console.log(splittedLoot);
                
            }
        }
        
    }

if (splittedLoot.length = 0){
    console.log("Failed treasure hunt.");
    
}else{
    let allLength = 0
    let length2 = splittedLoot.length
    console.log(splittedLoot);
    
    for (const spl of splittedLoot) {
        console.log(spl.join(","));
        
        allLength +=spl.length
    }
    
    
    console.log(`Average treasure gain: ${(allLength/length2).toFixed(2)} pirate credits.`);
    
}
    

}
treasureHunt (["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
    
    

    