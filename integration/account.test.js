const Account = require('../account')
const Deposit = require('../deposit')
const Withdrawal = require('../withdrawal')

describe("account", () => {
  it("add deposit to account and return deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.account).toEqual([deposit])
  })
  it("add withdrawal to account and return withdrawal", () => {
    const withdrawal = new Withdrawal("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(withdrawal)
    expect(account.account).toEqual([withdrawal])
  })

  it("shows balance is 0 / empty", () => {
    const account = new Account()
    expect(account.balance()).toEqual(0.00)
  })
})