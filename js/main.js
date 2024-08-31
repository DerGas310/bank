import { Client } from './client.js';
import { Bank } from './bank.js';

document.addEventListener('DOMContentLoaded', () => {
    const bank = new Bank('MyBank');

    const updateClientsList = () => {
        const clientsList = document.getElementById('clients-list');
        clientsList.textContent = bank.listClients();
    };

    document.getElementById('create-client-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('client-name').value;
        const balance = parseFloat(document.getElementById('client-balance').value);
        const client = new Client(name, balance);
        bank.addClient(client);
        updateClientsList();
    });

    document.getElementById('transaction-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('transaction-client').value;
        const amount = parseFloat(document.getElementById('transaction-amount').value);
        const type = document.getElementById('transaction-type').value;
        const client = bank.findClient(name);

        if (client) {
            if (type === 'deposit') {
                client.deposit(amount);
            } else if (type === 'withdraw') {
                client.withdraw(amount);
            }
            updateClientsList();
        } else {
            console.log('Client not found.');
        }
    });

    document.getElementById('transfer-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const fromName = document.getElementById('transfer-from').value;
        const toName = document.getElementById('transfer-to').value;
        const amount = parseFloat(document.getElementById('transfer-amount').value);
        bank.transfer(fromName, toName, amount);
        updateClientsList();
    });

    updateClientsList();
});
