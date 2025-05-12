function converting (string){

    let obj1 = JSON.parse(string)
    let entries = Object.entries(obj1)

    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
        
    }
    
}
converting('{"name": "George", "age": 40, "town": "Sofia"}')