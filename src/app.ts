import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/hasFormatter.js"

//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson ={
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount
    },
}

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

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul') as HTMLUListElement
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    //spread operator and tuple typecasting
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    console.log(
       doc
    )
    list.render(doc, type.value, 'end')
})

//generics
const addUID= <T extends {name: string, age:number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}


let docOne = addUID({name:'yoshi', age: 40})
console.log(docOne)

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid:1,
    resourceName: 'person',
    data: {name: 'shaun'}
}

const docFour: Resource<string[]> = {
    uid:1,
    resourceName: 'person',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docFour, docThree)

// Enums
enum Role {ADMIN, READ_ONLY, AUTHOR}
const person = {
    name: 'shaun',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

