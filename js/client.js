import { Address } from './address.js';
import { Money } from './money.js';

export class Client {
    constructor(name, address, money) {
        this.name = name;
        this.balance = money
        this.address = address
    }

    deposit(amount, currency) {
        this.balance.deposit(amount, currency)
    }

    withdraw(amount, currency) {
        this.balance.withdraw(amount, currency)
    }

    transferTo(amount, currency, recipient) {
        if(this.balance.money[currency] >= amount){
            this.withdraw(amount, currency)
            recipient.deposit(amount, currency);
        }
        else{
            console.log('не хватает денег')
        }
    }

    getAccountInfo() {
        return `Name: ${this.name}, Balance: ${this.balance.returnBalanceStr()}, Address: ${this.address.listAddress()}`;
    }
}