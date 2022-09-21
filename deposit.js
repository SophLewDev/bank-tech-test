class Deposit {
  constructor(date,amount) {
    this.transactionType = "DEPOSIT"
    this.date = date
    this.amount = amount
    this.resultingAmount
  }
}

module.exports = Deposit