
{
    // mapped types

    type AreaNumber = {
        height: number;
        width:number
    };

    // type AreaString = {
    //     height: string;
    //     width:string
    // }

    type AreaString<T> = {
         [key in keyof T ]: T[key]
    }

    type Height = AreaNumber["height"]
    // lookup

    const area1 : AreaString<{height: string; width:number}> = {
         height: "200",
         width:200
    }


}