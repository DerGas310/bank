import { Client } from './client.js';
import { Bank } from './bank.js';
import { Address } from './address.js';
import { Money } from './money.js';
let bank
document.addEventListener('DOMContentLoaded', () => {
    const savedBank = getFromLocalStorage('bank')
    if(savedBank){
       bank = new Bank(savedBank.name) 
       bank.clients = savedBank.clients.map(client => {
            const address = new Address(client.address.street, client.address.city, client.address.mailIndex)
            const money = new Money()
            money.money = client.balance.money
            return new Client(client.name, address, money)
       })
    }
    else{
        bank = new Bank('MyBank');
    }

    const updateClientsList = () => {
        const clientsList = document.getElementById('clients-list');
        clientsList.textContent = bank.listClients();
    };

    document.getElementById('create-client-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('client-name').value;
        const street = document.getElementById('client-street').value;
        const city = document.getElementById('client-city').value;
        const index = document.getElementById('client-index').value;
        const address = new Address(street, city, index)
        const money = new Money()
        const client = new Client(name, address, money);
        bank.addClient(client);
        saveToLocalStorage('bank', bank)
        updateClientsList();
    });

    document.getElementById('transaction-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('transaction-client').value;
        const amount = parseFloat(document.getElementById('transaction-amount').value);
        const type = document.getElementById('transaction-type').value;
        const currency = document.getElementById('transaction-currency').value;
        const client = bank.findClient(name);

        if (client) {
            if (type === 'deposit') {
                client.deposit(amount, currency);
            } else if (type === 'withdraw') {
                client.withdraw(amount, currency);
            }
            updateClientsList();
        } else {
            console.log('Client not found.');
        }
        saveToLocalStorage('bank', bank)
    });

    document.getElementById('transfer-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const fromName = document.getElementById('transfer-from').value;
        const toName = document.getElementById('transfer-to').value;
        const amount = parseFloat(document.getElementById('transfer-amount').value);
        const currency = document.getElementById('transfer-currency').value;
        bank.transfer(fromName, toName, amount, currency);
        updateClientsList();
        saveToLocalStorage('bank', bank)
    });

    updateClientsList();
});
function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromLocalStorage(data){
    const result = localStorage.getItem(data)
    return result ? JSON.parse(result): null
}