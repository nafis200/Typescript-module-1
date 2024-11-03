{
    // Type gurads

    type Alphaneumeric = string | number

    const add = (
        param1: Alphaneumeric, 
        param2: Alphaneumeric
        ): Alphaneumeric =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
         }
         else{
            return param1.toString() + param2.toString()
         }
    }

    //  in gurad

    type NormalUser = {
        name: string 
    }
    type AdminUser = {
        name: string;
        role:'admin'
    }

    const getUser = (user: NormalUser | AdminUser)=>{
         if('role' in user){
            console.log('admin user');
         }
         else{
            console.log('user role');
            
         }
     }

    

}