
{
    // Access Modifier

    class BankAccount{
       readonly id: number;
       public name: string;
       private _balance: number

        constructor(id:number,name:string,balance:number){
          
            this.id = id,
            this.name = name,
            this._balance = balance

        }

        addDeposit(amount : number){
            this._balance = this._balance + amount
        }
        getBalance(){
            return this._balance
        }

    }

    class StudentAccount extends BankAccount{
        test(){
        
        }
    }

    const goribManusherAccount = new BankAccount(111,"Mr.gorib",20);

    goribManusherAccount.addDeposit(300)

    const myBalance = goribManusherAccount.getBalance()

    console.log(myBalance);
    



}