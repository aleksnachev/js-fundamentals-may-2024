function tracker (arr){


    let wordOccurrences = {}

    let targetWords = arr.shift().split(" ")

    for (let targetWord of targetWords){
        wordOccurrences[targetWord] = 0
    }

    for(let word of arr){
        if(word in wordOccurrences){
            wordOccurrences[word]++

        }
    }

    let wordEntries = Object.entries(wordOccurrences)
    wordEntries.sort((a,b) => b[1] - a[1])

    for (let [word,occurrences] of wordEntries){
        console.log(`${word} - ${occurrences}`);
    }
}