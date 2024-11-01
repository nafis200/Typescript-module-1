
{
    // asynchoronus Typescript

    // promise

    const createpromise = (): Promise< {something:string} >=>{
        return new Promise< {something:string} >((resolve,reject)=>{
            const data : {something:string} = {something: 'something'}
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }


    const showData = async(): Promise< {something:string} > =>{
        const data:  {something:string}  = await createpromise()
        return data
    }

    showData()

}