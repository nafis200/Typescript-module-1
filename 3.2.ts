
{
    // inheritance of class and object

    class Parent{

        name: string;
        age:number;
        address: string;

        constructor(name: string, age: number,address: string){
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numberOfhours: number){
            console.log(`${this.name} will sleep for ${numberOfhours}`);
            
        }
    }

    class Student extends Parent{
        constructor(name: string, age: number,address: string){
            super(name,age,address)
        }
    }

    class Teacher extends Parent{
        
        designation: string

        constructor(name: string, age: number,address: string, designation: string){
            super(name,age,address)
            this.designation = designation
        }

        takeClass(numOfClass: number){
            console.log(`${this.name} will sleep for ${numOfClass}`);   
        }

    }
   


    const student1 = new Student('Mr. student',20,'tongi')
    const teacher = new Teacher('Mr. teacher',20,'tongi','sign')
    

}