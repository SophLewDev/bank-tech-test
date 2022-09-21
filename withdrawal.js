class Withdrawal {
  constructor(date,amount) {
    this.transactionType = "WITHDRAWAL"
    this.date = date
    this.amount = amount
    this.resultingAmount
  }
}

module.exports = Withdrawal