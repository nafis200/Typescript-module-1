
{
 
    // union Types 

    type FrontedDeveloper = 'fakibaz' | 'junior'

    const newDeveloper:FrontedDeveloper = 'junior'

    type User = {
        name: string;
        email?:string;
        gender:'male' | 'female'
        bloodGroup: 'O+' | 'A+' | 'AB+'
    }

    
    //  intersection

    type fronteddeveloper = {
         skills: string[];
         designation1:'fronted Developer'
    }
    type Backenddeveloper = {
         skills: string[];
         designation2:'Backend Developer'
    }

    type FullStackDeveloper = fronteddeveloper & Backenddeveloper 

    const fullStackdeveloper: FullStackDeveloper = {
        skills:['html,css'],
        designation1:'fronted Developer',
        designation2:'Backend Developer'
    }

}