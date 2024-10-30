
{
    // ternary operator || optional || nulish coalescing

    const age: number = 18

    age > 17 ? console.log('not adult') : console.log('adult  ');
    ;

    // nullish coalescing 
    // use of decision null and undefined

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'Guest'

    console.log(result1);

    type User = {
        name: string,
        address: {
            city:string 
            road: string
            presentaddress:string
            parmanentAddress?: string
        }
    }

    const user: User = {
        name:'nafis',
        address:{
            city:'',
            road:'',
            presentaddress:''
        }
    }

    const PermanentAddress = user?.address?.parmanentAddress ?? 'No address'
    
    
} 