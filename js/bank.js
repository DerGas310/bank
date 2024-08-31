import { Client } from './client.js';

export class Bank {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
        console.log(`Client ${client.name} added to ${this.name} bank.`);
    }

    findClient(name) {
        return this.clients.find(client => client.name === name);
    }

    removeClient(name) {
        this.clients = this.clients.filter(client => client.name !== name);
        console.log(`Client ${name} removed from ${this.name} bank.`);
    }

    getTotalBalance() {
        return this.clients.reduce((total, client) => total + client.balance, 0);
    }

    transfer(fromClientName, toClientName, amount) {
        const fromClient = this.findClient(fromClientName);
        const toClient = this.findClient(toClientName);
        if (fromClient && toClient) {
            fromClient.transferTo(amount, toClient);
        } else {
            console.log('One or both clients not found.');
        }
    }

    listClients() {
        return this.clients.map(client => client.getAccountInfo()).join('\n');
    }
}

