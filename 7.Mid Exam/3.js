function schoolLibrary (arr){

    let curLibrary = arr.shift().split("&")

    while (arr[0] !== "Done"){

        let allComands = arr.shift().split(" | ")
        let command = allComands.shift()
        
        if (command === "Add Book"){
            let bookName = allComands.shift()
            if (curLibrary.includes(bookName)) {
                
            }else {
                curLibrary.unshift(bookName)
            }
                

        }else if (command === "Take Book"){

            let bookName = allComands.shift();
            
            if (curLibrary.includes(bookName)){
                let index = curLibrary.indexOf(bookName)
                curLibrary.splice(index,1)
            }else {
                
            }


        }else if (command === "Insert Book"){
            let bookName = allComands.shift()  
            if (curLibrary.includes(bookName)){
                
            }else{
            curLibrary.push(bookName)
            }
        }else if (command === "Swap Books" ){

            let firstBook = allComands.shift();
            let secBook = allComands.shift();

            if (curLibrary.includes(firstBook) && curLibrary.includes(secBook)){

                let indexFirstBook = curLibrary.indexOf(firstBook)
                let indexSecBook = curLibrary.indexOf(secBook)

                curLibrary.splice(indexFirstBook,1,secBook)
                curLibrary.splice(indexSecBook,1,firstBook)
            }else {
                
            }

        }else if (command === "Check Book"){
            let index = Number(allComands.shift())

            if (curLibrary.includes(curLibrary[index])){
                console.log(curLibrary[index]);
            }else {
                
            }
        }
    }

    console.log(curLibrary.join(", "));
}
schoolLibrary 
((["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])
    )
    // (["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    //     "Add Book | Catch-22",
    //     "Swap Books | Anna Karenina | Catch-22",
    //     "Take Book | David Copperfield",
    //     "Done"])
        