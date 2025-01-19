function inventory (arr){
    // "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
    let finalArr =[]
    for (const tokens of arr) {
    let nowObj = {}
    let result = tokens.split(" / ")
    
    nowObj.Hero = result[0]
    nowObj.level = Number(result[1])
    nowObj.inventory = result[2]
    
    finalArr.push(nowObj)
    }
    
    let sortedArr  = finalArr.sort((a,b) => a.level - b.level)
    
    
    for (const pixel of sortedArr) {
        
    console.log(`Hero: ${pixel.Hero}`);
    console.log(`level => ${pixel.level}`);
    console.log(`items => ${pixel.inventory}`);
    
    }
    }