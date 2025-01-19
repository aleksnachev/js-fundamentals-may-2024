function game (arr){


    let encryptedMessage = arr.shift()
    
    for (const token of arr) {
        
        if (token !== "Decode"){

            if (token.includes("ChangeAll")){
//                 	ChangeAll|{substring}|{replacement} 
// 	                Changes all occurrences of the given substring with the replacement text.

                let splittedToken = token.split("|")
                let substring = splittedToken[1]
                let replacement = splittedToken[2]

                let splittedMessage = encryptedMessage.split("")
                for (let i = 0; i<splittedMessage.length;i++){
                    let char = splittedMessage[i]
                    if (char === substring){
                        splittedMessage.splice(i,1,replacement)
                    }
                }

                let joinedMessage = splittedMessage.join("")
                
                encryptedMessage = joinedMessage

            }else if (token.includes("Insert")){

//                  Insert|{index}|{value}
//                  Inserts the given value before the given index in the string.

                    let splittedToken = token.split("|")
                    let index = Number(splittedToken[1])
                    let value = splittedToken[2]

                    let splittedMessage = encryptedMessage.split("")
                    splittedMessage.splice(index,0,value)

                    let joinedMessage = splittedMessage.join("")
                    encryptedMessage = joinedMessage

            }else if (token.includes("Move")){
// 	                Move|{number of letters}
// 	                Moves the first n letters to the back of the string. 

                    let splittedToken = token.split('|')
                    let num = Number(splittedToken[1])

                    let splittedMessage = encryptedMessage.split("")
                    
                    for (let i = 1; i<=num; i++){
                        let char = splittedMessage[0]
                        splittedMessage.splice(0,1)
                        splittedMessage.push(char)
                    }
                    
                    let joinedMessage = splittedMessage.join("")
                    encryptedMessage = joinedMessage
            }

        }
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
game ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ])