class Account {
  constructor() {
    this.account = []
  }

  addToAccount(money) {
    this.account.push(money)
  }
}

module.exports = Account