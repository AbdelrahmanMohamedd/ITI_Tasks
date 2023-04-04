export default class Account{
    Acc_no:number;
    Balance:number;
    constructor(Acc_no=0,Balance=0){    //both are :number
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }

    debitAmount() { }
    creditAmount(){ }
    getBalance()  { }

}