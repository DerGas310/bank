import { Client } from './client.js';
import { Bank } from './bank.js';
import { Address } from './address.js';
import { Money } from './money.js';

function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

function getFromLocalStorage(data){
    const result = localStorage.getItem(data)
    return result ? JSON.parse(result): null
}

document.getElementById("create-client-form").addEventListener("submit", (event) => {
    event.preventDefault();
        const name = document.getElementById('client-name').value;
        const street = document.getElementById('client-street').value;
        const city = document.getElementById('client-city').value;
        const index = document.getElementById('client-index').value;
        const password = document.getElementById('client-password').value;
        const client = {name, address: {street, city, index}, password}
        const clients = getFromLocalStorage('clients') || []
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))
        window.location.href = "index.html"
        alert('добавлен клиент')
})

