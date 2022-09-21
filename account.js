class Account {
  constructor() {
    this.listOfTransactions = []
    this.balance = 0.00
  }

  addToAccount(transaction) {
    if (this._isTransactionPropertiesInvalid(transaction)) {
      return "Unrecognised transaction type" 
    }
    if (this._isInsufficientFunds(transaction)) { 
      return "Withdraw amount exceeds funds"
    }
    this.listOfTransactions.push(transaction)
    this._updateBalance(transaction)
  }

  getBalance() {
    return this.balance
  }
  
  getStatement() {
    let statement  = "date || credit || debit || balance\n"
    this.listOfTransactions.map((transaction) => {
      let date = transaction.date
      let credit = "";
      let debit = "";
      if (transaction.transactionType === "DEPOSIT") {
        credit = transaction.amount + " "
        this.balance += transaction.amount
      } else if (transaction.transactionType === "WITHDRAWAL") {
        debit = transaction.amount + " "
        this.balance -= transaction.amount
      }
      statement += `${date} || ${credit}|| ${debit}|| ${this.balance} ||\n`
    })
    return statement
  }

  _isInsufficientFunds(transaction) {
    return transaction.transactionType === "WITHDRAWAL"
      && transaction.amount > this.balance
  }

  _updateBalance(transaction) {
    if (transaction.transactionType === "DEPOSIT") {
      this.balance += transaction.amount
    } else if (transaction.transactionType === "WITHDRAWAL") {
      this.balance -= transaction.amount
    }
  }
  
  _isTransactionPropertiesInvalid(transaction) {
    return !(typeof transaction.date === "string" && typeof transaction.amount === "number")
  }
}

module.exports = Account