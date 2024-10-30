
{
    // spread operator  

    const bros1 : string[] = [
        'nafis',
        'ahamed'
    ];

    const bros2: string[] = ['nabil','ahamed']

    bros1.push(...bros2)

    console.log(bros1);
    
    // rest operator

    const greetFriends = (...friends: string[]) =>{
         friends.forEach((friend: string) => {
             console.log(`hellow ${friend}`);
             
         });
    }

    greetFriends('abul','murad','kalam','lablu')

}