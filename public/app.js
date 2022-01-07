import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
// let docs: HasFormatter[] = []
// let docOne = new Invoice('sam', 'digging', 250)
// let docTwo = new Payment('laila', 'Cooking', 200)
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)
// console.log(invOne, invTwo)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(invoice => {
//     console.log(invoice.format())
// })
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
//generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docFour, docThree);
// Enums
