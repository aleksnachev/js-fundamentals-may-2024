function towns (arr){

for (const token of arr) {
    
    let tokensplited = token.split(" | ")
    let town = tokensplited.shift();
    let latitude = Number(tokensplited.shift()).toFixed(2)
    let longitude = Number(tokensplited.shift()).toFixed(2)
    
    let info = {
        town,
        latitude,
        longitude
    }

    console.log(info);
    
}

// "Town", "Latitude" and "Longitude"
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );