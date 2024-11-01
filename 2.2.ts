

type User1 = {
     name: string;
     age:number 
}

const user: User1 = {
    name:'nafis',
    age:1000
}

// interface

interface User2 {
      name: string;
      age: number
}

const user2: User2 = {
    name:'nafis',
    age:1000
}

type rollNumber = number

type UserwithRole1 = User1 & {role: string}

const user3 : UserwithRole1 = {
    name:'nafis',
    age:1000,
    role:'admin'
}

interface UserwithRole2 extends User1{
    role: string
}

const user4: UserwithRole2 = {
    name:'nafis',
    age:1000,
    role:'admin'
}

// array interface

type Roll1 = number[]

const rollNumber: Roll1 = [1,2,3,4,5,6]

interface Roll2 {
    [index : number] : number
}

const rollNumber2 : Roll2 = [1,2,3,4,5,6,8]


// function Add2 

type Add1 = (num1 : number, num2: number) => number

interface Add2{
     (num1:  number, num2: number) : number
}

const adds : Add1 = (num1, num2)=>{
    return num1 + num2
}
const adds1 : Add1 = (num1, num2)=>{
    return num1 + num2
}