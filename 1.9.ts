
{

//   type Alias

type Student = {
    name: string,
    age:number,
    gender:string,
    contactNo?:string
}

const student1: Student= {
    name:'nafis',
    age:30, 
    gender:'male',
    contactNo:'01911111111'
}

const student2:Student = {
    name:'nafis',
    age:50, 
    gender:'20'
}

type Username = string

const userName:Username ='nanananananan'

type Add = (x: number, y:number)=> number

const add: Add = (num1,num2)=> num1 + num2
    
}