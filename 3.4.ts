
{
    //  instance guard

    class Animal {
        public name: string;
        public species:string;
        public sound:string
 
         
         constructor( name: string, species: string,sound:string){
             this.name = name;
             this.species = species;
             this.sound = sound
         }
         makeSound(){
             console.log(`The ${this.name} says ${this.sound}`);
             
         }
     }
 
     class Dog extends Animal{
        constructor(name : string,species: string,sound:string){
             super(name,species,sound)
        }

        makeBark(){
            console.log('I am barking');
            
        }

     }
     class Cat extends Animal{
        constructor(name : string,species: string,sound:string){
             super(name,species,sound)
        }

        makeMew(){
            console.log('I am mewa mewa');
            
        }

     }

     const dog = new Dog('Dog bhai','dog',
    'geu geu')
     const cat = new Cat('cat bhai','cat',
    'mewa mewa')

    const isDog = (animal : Animal): animal is Dog =>{
           return animal instanceof Dog
    }

    const getAnimal = (animal: Animal) =>{
          if(isDog(animal)){
            animal.makeBark()
          }
          else if(animal instanceof Cat){
            animal.makeMew()
          }
          else{
            animal.makeSound()
          }
    }

    getAnimal(dog)

}