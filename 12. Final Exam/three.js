function messages (arr){


    let capacity = Number(arr.shift())
    let records = {}

    for (const token of arr) {
        
        if (token !== "Statistics"){

            if (token.includes("Add")){
         

                let splittedToken = token.split("=")
                let username = splittedToken[1]
                let sent = Number(splittedToken[2])
                let received = Number(splittedToken[3])

                let nowArr = []
                if (records.hasOwnProperty(username)){

                }else {
                    
                    nowArr.push(sent)
                    nowArr.push(received)
                    records[username] = nowArr
                    
                }
                
            }else if (token.includes("Message")){

                let splittedToken = token.split("=")
                let sender = splittedToken[1]
                let receiver = splittedToken[2]

                if (records.hasOwnProperty(sender) && records.hasOwnProperty(receiver)){
                    
                    records[sender][0] += 1
                    records[receiver][1] += 1
                    
                    if (records[sender][0] + records[sender][1] >= capacity){
                        
                        
                        console.log(`${sender} reached the capacity!`);
                        delete records[sender]
                        
                    }

                    if (records[receiver][0] + records[receiver][1] >= capacity){
                        
                        console.log(`${receiver} reached the capacity!`);
                        delete records[receiver]
                    }
                    
                }
                    
                    
            }else if (token.includes("Empty")){


                let splittedToken = token.split("=")
                let username = splittedToken[1]
                
                if (username === "All"){
                    
                    records = {}
                    
                }else if (records.hasOwnProperty(username)){

                    delete records[username]
                }
                

            }
            
        }
    }
    
    
    let entries = Object.entries (records)
    let length = entries.length
    console.log(`Users count: ${length}`);

    for (const [data,elements] of entries) {
        console.log(`${data} - ${elements[0] + elements[1]}`);
        
    }
    

}
messages 
    // (["10",
    // "Add=Berg=9=0",
    // "Add=Kevin=0=0",
    // "Message=Berg=Kevin",
    // "Add=Mark=5=4",
    // "Statistics"])
    
    // (["12",
    //     "Add=Bonnie=3=5",
    //     "Add=Johny=4=4",
    //     "Empty=All",
    //     "Add=Bonnie=3=3",
    //     "Statistics"])
    
    (["20",
        "Add=Mark=3=9",
        "Add=Berry=5=5",
        "Add=Clark=4=0",
        "Empty=Berry",
        "Add=Blake=9=3",
        "Add=Michael=3=9",
        "Add=Amy=9=9",
        "Message=Blake=Amy",
        "Message=Michael=Amy",
        "Statistics"])
        