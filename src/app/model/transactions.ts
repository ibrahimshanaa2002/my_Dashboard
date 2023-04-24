import { Itransactions } from "./transactions.interface";
export const transactionsList: Array<Itransactions> = [
    {
        id: 1,
        trans_title: "Wallet",
        trans_datails: "Starbucks",
        status: "withdraw",
        amount: 20
    },
    {
        id: 2,
        trans_title: "Bank Transfer",
        trans_datails: "Add Money",
        status: "withdraw",
        amount: 20
    },
    {
        id: 3,
        trans_title: "Paypal",
        trans_datails: "Add Money",
        status: "deposit",
        amount: +20
    },
    {
        id: 4,
        trans_title: "Mastercard",
        trans_datails: "Ordered Food",
        status: "withdraw",
        amount: 20
    },
    {
        id: 5,
        trans_title: "Transfer",
        trans_datails: "Refund",
        status: "deposit",
        amount: 20
    },
];