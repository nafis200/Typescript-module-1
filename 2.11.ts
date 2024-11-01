
{
    //  utility types 
    // pick 

    type Person = {
        name: string;
        age:number;
        email?: string;
        contactNo:string
    }

    type NameAge = Pick<Person,"name" | "age">

    // omit  bad dewa name age bad dibo
    
    type ContactInfo = Omit<Person,'name' | 'age'>

    // Required

    type PersonRequire = Required<Person>

    // Partial 

    type PersonPartial = Partial<Person>

    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name:"Mr. Xy",
        age:200,
        contactNo:"017"
    }

    //  not change the value

    // type Myobj = {
    //     a: string,
    //     b: string
    // }
    type Myobj = Record<string,string>
    const obj1 : Myobj = {
        a: 'aa',
        b:'bb',
        c:'cc',
        d:'dd'
    }

    const EmptyObj: Record<string,unknown> = {}

}