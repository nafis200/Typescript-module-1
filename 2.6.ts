{
//   constraints

    const addCourseToStudent = <T extends{id:number;name:string;email: string}  >(student : T) =>{
        const course = 'Next Level Web Developement'
        
        return {
           ...student,
           course
        }
   }


   const student1 = addCourseToStudent({id:222,name:'Mr.nafis',email:'nafis@gmail.com',devType:'next level web'})

   const student2 = addCourseToStudent({id:333,name:'Mr.nafis',email:'nafis@gmail.com',hasWatch:'app level'})

//    const student3 = addCourseToStudent({emni: 'emni'})


}