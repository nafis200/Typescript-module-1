

{
    // type assertion

    let anything: any;

    anything = "next web developement";

    (anything as string).concat()

    const kgTogm = (value: string | number): number | string | undefined =>{
        
        if(typeof value === 'string'){
            return `converted value is ${parseFloat(value)}`
        }
        if(typeof value === 'number'){
            return value * 1000
        }

    }
    
    const result = kgTogm(1000) as number

    const result2 = kgTogm('1000') as string

    type CustomError = {
        message: string
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message);
        
    }
}

