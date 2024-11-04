

{
    // Getter And Setter

    class BankAccount{
       readonly id: number;
       public name: string;
       private _balance: number

        constructor(id:number,name:string,balance:number){
          
            this.id = id,
            this.name = name,
            this._balance = balance

        }

        // addDeposit(amount : number){
        //     this._balance = this._balance + amount
        // }
        // getBalance(){
        //     return this._balance
        // }

        //  getter 

        set Deposit(amount : number){
            this._balance = this._balance + amount
        }

        get Balance(){
            return this._balance
        }

    }

   
    const goribManusherAccount = new BankAccount(111,"Mr.gorib",20);

    // goribManusherAccount.addDeposit(300)
    // function call



    // const myBalance = goribManusherAccount.getBalance()

    //  function call

//  setter 
goribManusherAccount.Deposit = 500

const myBalance = goribManusherAccount.Balance


}