
//  function with generics

{

    const createArray = (param: string): string[] =>{
        return [param]
    }
    const createArrayWithGenerics = <T> (param: T): T[] =>{
        return [param]
    }


    const res1 = createArray('bangladesh')

    const resGeneric = createArrayWithGenerics<boolean>(true)

    const res2 = createArrayWithGenerics<string>('hfgjhfsd')

    type User = {
        id:number;
        name:string
    }

    const res3 = createArrayWithGenerics<User>({id:222, name:'Mr.nafis'})

    const createArrayWithGenericsTuple = <T,Q> (param1: T, param2:Q):[T,Q] =>{
        return [param1,param2]
    }

    const res4 = createArrayWithGenericsTuple <string,number>("bangladesh",1971)


    const addCourseToStudent = <T>(student : T) =>{
         const course = 'Next Level Web Developement'
         
         return {
            ...student,
            course
         }
    }


    const student1 = addCourseToStudent({name:'Mr.nafis',email:'nafis@gmail.com',devType:'next level web'})

    const student2 = addCourseToStudent({name:'Mr.nafis',email:'nafis@gmail.com',hasWatch:'app level'})




}