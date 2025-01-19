function party (arr){
    let guests = {}
for (const token of arr) {
    
    if (token !== 'PARTY'){

       if (token[0].charCodeAt() >= 48 && token[0].charCodeAt() <=57){
            guests[token] = "VIP"
       }else {
            guests[token] = 'regular'
       }

    }
}
    let index = arr.indexOf("PARTY")
    
    for (let i =index+1; i<arr.length; i++){

        let curToken = arr[i]

        delete guests[curToken]
        
    }

    let entriesArr = Object.entries(guests)
    let sortedArr = entriesArr.sort((a,b) => {
        if (a[0][0].charCodeAt() >= 48 && a[0][0].charCodeAt() <=57){
             a[0] - b[0]
        }else {
             b[0] - a[0]
        }
    })

    console.log(sortedArr.length);

    for (const [person,data] of sortedArr) {
        
        console.log(person);
    }

}