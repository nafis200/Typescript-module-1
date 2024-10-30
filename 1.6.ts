
{
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }
    
    
    
    const add1 = (num1: number): number => {
        return num1;
    }
    
    
    const poorUser = {
        name: 'nafis',
        balance: 0,
        addBalance(balance: number): string {
            this.balance += balance;
            return `Your balance is ${this.balance}`;
        }
    }
    
    const arr: number[] = [1,4,10] 
    
    const newArray: number[] = arr.map((x : number): number=> x * x)
    
    console.log(newArray);
}


