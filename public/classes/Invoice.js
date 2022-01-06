export class Invoice {
    // can read inside and outside but not change
    // readonly client: string;
    // can change/read inside the class
    // private details: string;
    // can change/read outside the class
    // public amount: number;
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
