#!/usr/bin/env node
import chalk from 'chalk';
class Account {
    owner;
    balance;
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(chalk.green(`Deposited $${amount}. New balance: $${this.balance}.`));
        }
        else {
            console.log(chalk.red(`Invalid deposit amount: $${amount}.`));
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Withdrew $${amount}. New balance: $${this.balance}.`));
        }
        else if (amount > this.balance) {
            console.log(chalk.red(`Insufficient funds. Withdrawal amount: $${amount}, Available balance: $${this.balance}.`));
        }
        else {
            console.log(chalk.red(`Invalid withdrawal amount: $${amount}.`));
        }
    }
    getBalance() {
        return this.balance;
    }
    getOwner() {
        return this.owner;
    }
}
class Bank {
    accounts = [];
    createAccount(owner, initialBalance) {
        const account = new Account(owner, initialBalance);
        this.accounts.push(account);
        return account;
    }
    getAccount(owner) {
        return this.accounts.find(account => account.getOwner() === owner);
    }
}
// Main code
console.log(chalk.blue.bold('Welcome to TNA6 OOp MyBank!'));
const myBank = new Bank();
const account = myBank.createAccount('Alice', 1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(1500); // Insufficient funds
const bobAccount = myBank.createAccount('Bob', 200);
bobAccount.deposit(100);
bobAccount.withdraw(50);
console.log(chalk.yellow(`Alice's final balance: $${account.getBalance()}`));
console.log(chalk.yellow(`Bob's final balance: $${bobAccount.getBalance()}`));
