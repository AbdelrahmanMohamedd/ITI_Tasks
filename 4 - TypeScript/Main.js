import Account from './classes/Account.js';
class Saving_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, Min_Balance = 1000) {
        super(Acc_no, Balance);
        this.Min_Balance = Min_Balance;
    }
    addCustomer() {
        console.log("its addCustomer from Saving_Account");
    }
    removeCustomer() {
        console.log("its removeCustomer from Saving_Account");
    }
}
class Current_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, interest_rate = 0.25) {
        super(Acc_no, Balance);
        this.interest_rate = interest_rate;
    }
    addCustomer() {
        console.log("its addCustomer from Current_Account");
    }
    removeCustomer() {
        console.log("its removeCustomer from Current_Account");
    }
}
