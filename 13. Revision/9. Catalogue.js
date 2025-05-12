function catalouge (arr){
    let products = {}
    let allNames = []
for (const token of arr) {
    let splittedToken = token.split(" : ")
    let productName = splittedToken.shift()
    let productPrice = Number(splittedToken.shift())

    products[productName] = productPrice
    allNames.push(productName)
    
}
allNames.sort((a,b) => a.localeCompare(b))
let nowLetter = ""
for (const el of allNames) {
    if (el[0] == nowLetter){
        
        console.log(`${el}: ${products[el]}`);
        
        
    }else{
        nowLetter = el[0]
        console.log(nowLetter);
        console.log(`${el}: ${products[el]}`);
        
    }
}


}
catalouge([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )