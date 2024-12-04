class Account {
    constructor(owner, balance = 0) {
      this.owner = owner;  // власник
      this.balance = balance;  //  баланс
      this.transactions = [];  //  транзакція
    }
  
    //  поповнення рахунку
    deposit(amount) {
      if (amount <= 0) {
        console.log("Сума поповнення має бути більшою за нуль.");
        return;
      }
  
      this.balance += amount;
      this.transactions.push({
        type: "deposit",
        amount: amount,
        date: new Date().toLocaleString(),
      });
  
      console.log(`Баланс успішно поповнено на ${amount}. Новий баланс: ${this.balance}`);
    }
  
    // зняття грошей з рахунку
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Сума для зняття має бути більшою за нуль.");
        return;
      }
  
      if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку.");
        return;
      }
  
      this.balance -= amount;
      this.transactions.push({
        type: "withdraw",
        amount: amount,
        date: new Date().toLocaleString(),
      });
  
      console.log(`Знято ${amount}. Новий баланс: ${this.balance}`);
    }
  
    // перегляд балансу
    getBalance() {
      console.log(`Баланс рахунку: ${this.balance}`);
      return this.balance;
    }
  
    //  історії транзакцій
    getTransactionHistory() {
      if (this.transactions.length === 0) {
        console.log("Історія транзакцій порожня.");
        return;
      }
  
      console.log("Історія транзакцій:");
      this.transactions.forEach((transaction, index) => {
        console.log(
          `${index + 1}. Тип: ${transaction.type}, Сума: ${transaction.amount}, Дата: ${transaction.date}`
        );
      });
    }
  
    //  очищення історії транзакцій
    clearTransactionHistory() {
      this.transactions = [];
      console.log("Історія транзакцій очищена.");
    }
  }
  
 
  
  // Створюємо новий рахунок для користувача
  let account = new Account("Іван", 1000);
  
  // Переглядаємо баланс
  account.getBalance();
  
  // Поповнюємо рахунок
  account.deposit(500);
  
  // Знімаємо гроші
  account.withdraw(200);
  
  // Переглядаємо історію транзакцій
  account.getTransactionHistory();
  
  // Очищаємо історію транзакцій
  account.clearTransactionHistory();
  
  // Переглядаємо історію після очищення
  account.getTransactionHistory();
  