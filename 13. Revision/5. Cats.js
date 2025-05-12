function cats (arr){

    class Cat{
        constructor(name,age){
            this.name = name,
            this.age=age
        }

        meow (){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }

    for (const i1 of arr) {
        let splittedI1 = i1.split(" ")
        let newCat = new Cat(splittedI1[0],splittedI1[1])
        newCat.meow()
        
        
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])

