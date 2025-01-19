function employees (array){

for (let name of array){

    let length = name.length;

    console.log(`Name: ${name} -- Personal Number: ${length}`)
}

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );