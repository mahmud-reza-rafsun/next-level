// access modify


class BankAccount {
    readonly userId: number;
    readonly userName: string;
    protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
};

class StudentBankAccount extends BankAccount {
    test() {
        this.userBalance = this.userBalance;
    }
};

const halimBhai = new BankAccount(102, "halim101", 122);
halimBhai.addBalance(500)
console.log(halimBhai);