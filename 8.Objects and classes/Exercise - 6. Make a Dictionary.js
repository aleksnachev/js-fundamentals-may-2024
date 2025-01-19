function dictionary (arr){
    let finalObj = {}
    for (const obj of arr) {
        let sortedObj = JSON.parse(obj)
        let key = Object.keys(sortedObj)
        let description = Object.values(sortedObj)[0]
        finalObj[key] = description
        
    }
    
    let entries = Object.entries(finalObj)
    
    let sortedThin = entries.sort((a,b) => a[0].localeCompare(b[0]))
    
    for (const token of sortedThin) {
        console.log(`Term: ${token[0]} => Definition: ${token[1]}`);
    }
  
    }