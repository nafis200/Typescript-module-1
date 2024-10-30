{


    const DontknowNow = (value:unknown)=>{
         if(typeof value === 'number'){
             const convertedSpeed = value * 1000 / 3600
         }
         if(typeof value === 'string'){
           const [result, unit] = value.split(" ")
           const converspped = (parseFloat(result) * 1000) / 3600
         }
    }

    
   
    DontknowNow(1000)

    const throwError = (msg: string): never =>{
       throw new Error(msg)
    }

}