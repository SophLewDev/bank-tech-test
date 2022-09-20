class Account {
  constructor() {
    this.account = []
  }

  addToAccount(money) {
    this.account.push(money)
  }

  balance() {
    return 0.00
  }
}

module.exports = Account