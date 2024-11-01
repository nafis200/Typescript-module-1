
{
    // generic type
 
    const rollNUmbers : number[] = [3,6,8]
    const rollNUmbers1 : Array<number> = [3,6,8]
   
    const mentors: string[] = ['nafis','ahamed']
    const mentors1: Array<string> = ['nafis','ahamed']

    const boolArray : boolean[] = [true,false,true]

    type GenericArray<T> = Array<T>


    const rollNUmbers3 : GenericArray<number> = [3,6,8]

    const user : GenericArray<object> = [
        {
            name:'nafis',
            age:100
        },
        {
            name:'ahamed',
            age:'23 '
        },
        {
            role:'admin'
        }
    ]

    // is it true no


    const user1 : GenericArray<{name: string, age: number}> = [
        {
            name:'nafis',
            age:100
        },
        {
            name:'ahamed',
            age:23
        },
        
    ]
   
    type GenericTuple<X,Y> = [X,Y]

    const userWithId: GenericTuple<number,{name:string,email:string}> = [
       1234,
       {
         name:'nafis',
         email:'nafisha,ed'
       }
    ] 



}