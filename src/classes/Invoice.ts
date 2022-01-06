import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Invoice implements HasFormatter {
    // can read inside and outside but not change
    // readonly client: string;

    // can change/read inside the class
    // private details: string;

    // can change/read outside the class
    // public amount: number;

    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number
        ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}