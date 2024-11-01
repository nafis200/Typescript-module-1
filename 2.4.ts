
{
    // Generic with interface

    type GenericArray<T> = Array<T>

    interface User{
        name: string,
        age:number
    }

    const user1 : GenericArray<User> = [
        {
            name:'nafis',
            age:100
        },
        {
            name:'ahamed',
            age:23
        },
        
    ]

    interface Developer<T, X>{
        name: string;
        computer:{
            brand: string;
            model:string;
            releaseYear: number
        };
        smartWatch : T;
        bike ?: X        
    }

    interface EmlabWatch {
        brand:string;
        model:string;
        display:string
    }

    const poorDeveloper: Developer<EmlabWatch,null>
      = {
        name: 'nafis',
        computer:{
            brand: 'doll',
            model:'core i',
            releaseYear: 2000
        },
        smartWatch : {
            brand:'Emilab',
            model:'kw66',
            display:'OLED'
        }
    }

    interface AppleWatch {
        brand:string;
        model:string;
        heartTrack:boolean;
        sleepTrack:boolean;
        
    }

    interface Bike {
        model:string;
        engineCapacity: string
    }


    const richDeveloper: Developer<AppleWatch,Bike> 
        = {
        name: 'nafis',
        computer:{
            brand: 'Hp',
            model:'core i7',
            releaseYear: 2024
        },
        smartWatch: {
            brand:'Apple',
            model:'kw66',
            heartTrack: true,
            sleepTrack:true
        },
        bike:{
            model : 'yemmmha',
            engineCapacity:'100cc'
        }
        
    }



}