{

    class Animal {
       public name: string;
       public species:string;
       public sound:string

    //    parameter properties
        
        constructor( name: string, species: string,sound:string){
            this.name = name;
            this.species = species;
            this.sound = sound
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
            
        }
    }

    const dog = new Animal('moku','homo speiens','geu geu')
    
    dog.makeSound()

    // clean code
    //  both code are same

    class Animal1 {
         constructor (public name1: string,public species1: string,public sound1: string){}
         makeSound(){
            console.log(`the ${this.name1} and specices ${this.sound1}`);
            
         }
    }
    const dog1 = new Animal1('koku','homo','bau bau')

    
    
    
}