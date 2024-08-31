export class Client {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} added to ${this.name}'s account.`);
        } else {
            console.log('Amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn from ${this.name}'s account.`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    transferTo(amount, recipient) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            recipient.deposit(amount);
            console.log(`${amount} transferred from ${this.name} to ${recipient.name}.`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    getAccountInfo() {
        return `Name: ${this.name}, Balance: ${this.balance}`;
    }
}
