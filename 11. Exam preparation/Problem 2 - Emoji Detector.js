function emoji (arr){

    let text = arr[0]

    let regForDigits = /[\d]/g
    let resultForDigits = text.matchAll(regForDigits)
    let sum =1
    for (const token of resultForDigits) {
        sum = sum * Number(token[0])
    }
    
    let regForEmoji = /::[A-Z][a-z]+[a-z]::|[**]+[A-Z][a-z]+[a-z][**]+/g
    let resultForEmoji = text.matchAll(regForEmoji)
    let finalEmoji = []

    for (const token2 of resultForEmoji) {
        finalEmoji.push(token2[0])
    }
    
    //sum
    console.log(`Cool threshold: ${sum}`);
    let num1 = finalEmoji.length
    console.log(`${num1} emojis found in the text. The cool ones are:`);
    
    let resultEmoji = []
    for (const emoji of finalEmoji) {
        
        let resultAski = 0;
        
        
        for (let i=2; i<emoji.length-2; i++){
            
            let c = emoji[i].charCodeAt()
            resultAski+=c
            
            
        }
        
        if (resultAski > sum){
            resultEmoji.push(emoji)
        }
        
    }
    
for (const finalE of resultEmoji) {
    console.log(finalE);
}

}
emoji (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])