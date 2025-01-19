function hogwarts (arr){

    let spell = arr.shift()
    
    for (const token of arr) {
        
        if (token !== "Abracadabra"){

            if (token === "Abjuration"){
                
                let upperText = spell.toUpperCase()
                console.log(upperText);
                spell = upperText

            }else if (token === "Necromancy"){

                let lowerText = spell.toLowerCase()
                console.log(lowerText);
                spell = lowerText
                
            }else if (token.includes("Illusion")){

//                 Illusion {index} {letter}"
// o	Replace the letter at the index with the given one and print "Done!"
// o	If the index is invalid, print: "The spell was too weak."

                let splittedToken = token.split(" ")
                let index = Number(splittedToken[1])
                let letter = splittedToken[2]
               
                let splittedSpell = spell.split("")
                
                if (splittedSpell.includes(splittedSpell[index])){
                    splittedSpell.splice(index,1,letter)
                    console.log("Done!");
                    
                    spell = splittedSpell.join("")
                
                }else {
                    console.log("The spell was too weak.");
                    
                }
                
                
            }else if (token.includes("Divination")){

//                 Divination {first substring} {second substring}"
// o	Replace the first substring (all matches) with the second and print the result. 
// o	If the substring does not exist, skip the command.

                let splittedToken = token.split(" ")
                
                let firstSub = splittedToken[1]
                let secSub = splittedToken[2]

                let splittedSpell = spell.split("")
                if (splittedSpell.includes(firstSub)){
                for (let i=0;i<splittedSpell.length;i++){

                    let char = splittedSpell[i]

                    if (char === firstSub){
                        splittedSpell.splice(i,1,secSub)
                    }
                    
                }
                
                let joinedSpell = splittedSpell.join("")
                spell = joinedSpell

                console.log(spell);
            }
                

            }else if (token.includes("Alteration")){

//                 Alteration {substring}"
// o	Remove the substring from the string and print the result.
// o	If the substring does not exist, skip the command.

                let splittedToken = token.split(" ")
                let substring = splittedToken[1]
                
                if (spell.includes(substring)){

                    let index = spell.indexOf(substring)
                    
                    let length = substring.length

                    let splittedSpell = spell.split("")
                    
                    splittedSpell.splice(index,length)
                    let joinedSpell = splittedSpell.join("")

                    spell = joinedSpell

                    console.log(spell);
        
                }
                
            }else {

                console.log("The spell did not work!");
                
            }

        }
        
    }
    
}
hogwarts 
    //  (["A7ci0",
    // "Illusion 1 c",
    // "Illusion 4 o",
    // "Abjuration",
    // "Abracadabra"])

    // (["TR1GG3R",
    //     "Necromancy",
    //     "Illusion 8 m",
    //     "Illusion 9 n",
    //     "Abracadabra"])

    // (["Swordmaster",
    //     "Alteration master",
    //     "Abracadabra"])
        

    // (["AlexA0",
    //     "Divination A D"
    // ])

    (["SwordMaster",
            "Target Target Target",
            "Abjuration",
            "Necromancy",
            "Alteration master",
            "Abracadabra"])
            