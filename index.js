class Bank{
    // User Balance and Savings
    static balance = 1000
    static savings = 0

    // Bank Branch (The Branch manages the Bank App Server)
    constructor(accountNumber, bankBranch){
        this.accountNumber = accountNumber
        this.bankBranch = bankBranch
    }

    // Displays User's Bank balance
    static displayBalance(){
        if(Bank.balance <= 0){
            console.log(`Current Balance: $${Bank.balance}`)
            Bank.deposit(1350)
        }
        else{
            console.log(`Current Balance: $${Bank.balance}`)
        }
    }

    // Displays User Savings
    static displaySavings(){
        console.log(`Savings Balance: $${Bank.savings}`)
    }

    // Deposit Method takes Amount
    static deposit(amount){
        Bank.balance += amount;
        console.log(`$${amount} was deposited successfully!`)
        Bank.displayBalance()
    }

    // Transfer Method takes Receiver's Name, Amount to be sent, and User Pin (Already set to default) 
    static transfer(receiver, amount, pin=User.Pin){
        Bank.balance -= amount
        console.log(`You successfully transfered $${amount} to ${receiver}`)
        Bank.displayBalance()
    }

    // Save Method takes Amount to be saved, and User Pin (Already set to default) 
    static save(amount, pin=User.Pin){
        Bank.balance -= amount
        Bank.savings += amount;
        console.log(`You successfully saved $${amount}`)
        Bank.displayBalance()
        Bank.displaySavings()
    }

    // Withdraw Method takes Amount to be withdrawn, and User Pin (Already set to default) 
    static withdraw(amount, pin=User.Pin){
        Bank.balance -= amount
        console.log(`$${amount} withdrawn successfully.`)
        Bank.displayBalance()
    }

    // PayBill Method Allows User to pay Bills. It takes Bill name, amount, and User's Bank Pin 
    static payBill(billName, amount, pin=User.Pin){
        Bank.balance -= amount
        console.log(`You successfully paid ${billName} Bill`)
        Bank.displayBalance()
    }
    getAccountNumber(){
        console.log(`Your Account Number is ${this.getAccountNumber}`)
    }
    getBranch(){
        console.log(`${this.accountNumber} was registered at ${this.bankBranch} Branch`)
    }
}

class User{
    // Transaction Pin
    static Pin = `Abc@1234`

    constructor(userName, userPassword){
        this.userName = userName
        this.userPassword = userPassword
    }

    // User Registration
    register(){
        console.log(`${this.userName} has been registered successfully.`)
        this.login()
    }
    // User Login
    login(){
        console.log(`Login Successful!`)
        console.log(`Welcome to the Effects Bank, ${this.userName}!`)
        Bank.displayBalance();
    }
    // User Logout
    logout(){
        console.log(`Logged Out! Thank you for using the Effects Bank`)
    }
}

const bank = new Bank("344678901","Abakaliki"); 
const user = new User("Emerie","Smile4er") //new User


user.register() //New User Registration
Bank.transfer("John Doe", 500) // $500 transferred to John Doe!
Bank.deposit(6000) // $6,000 deposited
Bank.save(1282) // $1,282 saved
Bank.withdraw(265) //$265 withdrawn
Bank.payBill("NEPA",98) // Nepa Bill Payment
bank.getBranch()
user.logout() //User Logout