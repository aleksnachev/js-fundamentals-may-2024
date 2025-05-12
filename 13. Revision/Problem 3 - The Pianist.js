function pianist (arr){
    let allSongs = {}
    let num = Number(arr.shift())
    class Song {
        constructor(piece,composer){
            this.piece = piece,
            this.composer = composer
        }
    }

    for (let i=0; i<num;i++){
        let token = arr.shift()
        let splittedToken = token.split("|")
        let piece1 = splittedToken.shift()
        let composer1 = splittedToken.shift()
        let key1 = splittedToken.shift()
        let newSong = new Song(piece1,composer1)

        let keys = Object.keys(allSongs)
        if(!keys.includes(key1)){
            allSongs[key1] = newSong
        }
    }

    for (const tok of arr) {
        if (tok == "Stop"){
            break
        }

        let splittedTok = tok.split("|")
        let command = splittedTok.shift()
        if (command == "Add"){
            let piece2 = splittedTok.shift()
            let comp2 = splittedTok.shift()
            let key2 = splittedTok.shift()

            
        }
        
    }
    
    
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )