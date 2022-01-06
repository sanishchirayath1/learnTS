import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
let docs = [];
let docOne = new Invoice('sam', 'digging', 250);
let docTwo = new Payment('laila', 'Cooking', 200);
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(invoice => {
    console.log(invoice.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
