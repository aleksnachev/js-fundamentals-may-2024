function message(arr){

    let concieledMessage = arr.shift()
    let splittedCconcieledMessage = concieledMessage.split("")
    
    for (const token of arr) {
        
        let splittedToken = token.split(":|:")
        let command = splittedToken.shift()
        
        if (command != "Reveal"){

            if (command == "ChangeAll"){
                let first = splittedToken.shift()
                let replacement = splittedToken.shift()
                
                for (const el of splittedCconcieledMessage) {
                    if (el == first){
                        let index = splittedCconcieledMessage.indexOf(el)
                        splittedCconcieledMessage.splice(index,1,replacement)
                    }
                }
                
            }else if (command == "InsertSpace"){
                let index = splittedToken.shift()
// 
                splittedCconcieledMessage.splice(index,0," ")
                
            }else if (command == "Reverse"){
                let substring = splittedToken.shift()
                let substringSplitted = substring.split("")
                let firstBuh = substringSplitted[0]
                let length = substringSplitted.length
                let firstIndex = splittedCconcieledMessage.indexOf(firstBuh)
                let reversed = substringSplitted.reverse()
                
                if (concieledMessage.includes(substring)){
                    splittedCconcieledMessage.splice(firstIndex,length)
                    splittedCconcieledMessage.push(reversed.join(""))
                }else{
                    console.log("error");
                    continue
                }
            }
            concieledMessage = splittedCconcieledMessage.join("")
            console.log(concieledMessage);
            
        }
        
    }
console.log(`You have a new text message: ${concieledMessage}`);

    
}
message (
//     [
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ]

  [
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )