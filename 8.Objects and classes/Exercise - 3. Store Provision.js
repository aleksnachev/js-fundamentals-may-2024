function storeProvision (curStore, forDelvery){

    let result = {}

    for (let i = 0; i<curStore.length; i += 2){
        let token = Number(curStore[i+1])
        result[curStore[i]] = token
    }

    for (let  j=0; j<forDelvery.length; j+=2){
        let token2 = Number(forDelvery[j+1])
        if(result.hasOwnProperty(forDelvery[j])){
            result[forDelvery[j]] += token2
        }else{
        result[forDelvery[j]] = token2
        }
    }

    let entries = Object.entries(result)
    for (const [name,quantity] of entries) {
        console.log(`${name} -> ${quantity}`);
    }
}