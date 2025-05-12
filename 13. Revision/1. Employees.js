function employees (arr){

    let obj = {}

    for (const el of arr) {
        let name = el
        let nameLength = name.length
        
        obj[name] = nameLength
        
    }

let entries = Object.entries(obj)
for (const element of entries) {
    let n = element[0]
    let y = Number(element[1])
    
    console.log(`Name: ${n} -- Personal Number: ${y}`);
    
}

}
employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )