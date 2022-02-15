class Account {
  constructor(email) {
    this.id = email;
    this.transactions = [];
  }
  get balance() {
    let b = 0;
    for (const t of this.transactions) {
      b += t.amount;
    }
    return b;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  get isAllowed() {
    if (this.value > this.account.balance) {
      return true;
    } else {
      return false;
    }
  }

  commit() {
    if (this.isAllowed) {
      this.time = new Date();
      this.account.addTransaction({time: this.time, amount: this.value});
    } else {
      console.log("invalid transaction!");
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

const stevie = new Account("stevie@rosebudd.ca");

console.log(`stevie balance: ${stevie.balance}`);

// t3 = new Deposit(5000, stevie);
// t3.commit();

// console.log(stevie.balance);

// t4 = new Withdrawal(600, stevie);
// t4.commit();


// console.log(stevie.balance);

