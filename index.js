class Account {
  constructor(email) {
    this.id = email;
    // this.balance = 0;
    this.transactions = [];
  }
  get balance(){
     // Calculate the balance using the transaction objects.
     let b = 0;
     for (const t of this.transactions){
      b += t.amount;
     }
     return b;
  }

  addTransaction(transaction){
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account){
    this.amount = amount;
    this.account = account;
  }
  commit(){
    // console.log(this.value);
    // this.account.balance += this.value;
    this.time = new Date();
    // this.account.addTransaction(this);
    this.account.addTransaction({time: this.time, amount: this.value});
  }
}

class Withdrawal extends Transaction {
  get value(){
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value(){
    return this.amount;
  }
}

const stevie = new Account("stevie@rosebudd.ca");

console.log(`stevie balance: ${stevie.balance}`);

t3 = new Deposit(5000, stevie);
t3.commit();

console.log(stevie.balance);

t4 = new Withdrawal(150, stevie);
t4.commit();


console.log(stevie.balance);

