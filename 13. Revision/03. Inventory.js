function inventory (arr){
    
    let inventory = arr.shift()
    let inventorySplitted = inventory.split(", ")
    
    
    for (const token of arr) {
        if (token!= "Craft!"){
            let splittedToken = token.split(" - ")
            let command = splittedToken[0]
            let material = splittedToken[1]

            if (command == "Collect"){
                if (!inventorySplitted.includes(material)){
                    inventorySplitted.push(material)
                }
               
            }else if (command == "Drop"){
                if (inventorySplitted.includes(material)){
                    let index = inventorySplitted.indexOf(material)
                    inventorySplitted.splice(index,1)
                }
            }else if (command == "Combine Items"){
                let splittedMaterial = material.split(":")
                let oldItem = splittedMaterial[0]
                let newItem = splittedMaterial[1]
                if (inventorySplitted.includes(oldItem)){
                    let ind = inventorySplitted.indexOf(oldItem)
                    inventorySplitted.splice(ind+1,0,newItem)
                }
            }else if (command == "Renew"){
                if (inventorySplitted.includes(material)){
                    let index = inventorySplitted.indexOf(material)
                    inventorySplitted.splice(index,1)
                    inventorySplitted.push(material)
                }
            }
        }
        
    }
console.log(inventorySplitted.join(", "));

}
inventory(
//     [
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]

  [
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
  )