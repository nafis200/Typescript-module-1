
{
//  Generic constraint Using Key Of operator
 
  type Vechicle = {
    bike: string;
    car:string;
    ship:string
  }

  type Owner = "bike" | "car" | "ship" 

  type Owner2 = keyof Vechicle

  const person1 : Owner = "car"

  const person2 : Owner2 = 'car'

 

  const getPropertyValue = <X,Y extends keyof X>(obj: X, key:Y)=>{
       return obj[key]
  }

  const user = {
    name: 'Mr. Nafis',
    age:26,
    address:'ctg'
  }

  const result1 = getPropertyValue(user,'name')
   

}