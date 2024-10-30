
// destructuring
{

const user= {
    id: 345,
    name: {
        firstName:'Nafis',
        lastName:'ahamed'
    },
    contactNo: '01922208141',
    address:'Dhaka bangladesh'
}

const {contactNo, name:{firstName,lastName}} = user

// destructring e type declared kora jabe na

// array destructiong

const myFriends = ['nafis','ahamed','me','you']

const [,b,...c]= myFriends

}