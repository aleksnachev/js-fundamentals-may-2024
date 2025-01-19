function problemReset(arr){

    let password = arr.shift()

    for (const token of arr) {
        
        if (token !== "Done"){

            if (token === "TakeOdd"){

                let splittedPass = password.split("")
                let newPass = []
                
                for (let i =0; i<splittedPass.length; i++){
                    let char = splittedPass[i]
                    if (i%2 === 1){
                        newPass.push(char)
                    }
                }

                let joinedNewPass = newPass.join("")
                
                password = joinedNewPass

                console.log(password);
            }else if (token.includes("Cut")){
//                 "Cut {index} {length}"
// Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// The given index and the length will always be valid.
                let splittedToken = token.split(" ")
                let index = Number(splittedToken[1])
                let length = Number(splittedToken[2])
                
                let splittedPass = password.split("")
                splittedPass.splice(index,length)
                let joinedNewPass = splittedPass.join("")

                password = joinedNewPass
                console.log(password);
            }else if (token.includes("Substitute")){


//                 Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replace all of its occurrences with the substitute text given and print the result.
// o	If it doesn't, prints "Nothing to replace!".

                let splittedToken = token.split(" ")
                let substring = splittedToken[1]
                let substitute = splittedToken[2]
                
                let splittedPass = password.split("")
                if (password.includes(substring)){
                    
                    password.replaceAll(substring,substitute)
                }else {
                    console.log("Nothing to replace!");
                }

                
            }
        }
    }

    console.log(password);
}
problemReset (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
