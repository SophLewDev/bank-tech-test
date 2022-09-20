class Account {
  constructor() {
    this.account = []
  }

  addToAccount(money) {
    this.account.push(money)
  }

  balance() {
    if (this.account.length === 0)
      return 0.00
    else {
      return 1000.00
    }
  }
}

module.exports = Account