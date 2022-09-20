const { it } = require('node:test')
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
    expect(account.getBalance()).toEqual(0.00)
  })

  it("shows balance after adding deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(deposit)
    account.calculate()
    expect(account.getBalance()).toEqual(1000.00)
  })
  it("shows balance after deposit and withdrawal", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const withdrawal = new Withdrawal("20/09/2022",500)
    const account = new Account()
    account.addToAccount(deposit)
    account.addToAccount(withdrawal)
    account.calculate()
    expect(account.getBalance()).toEqual(500.00)
  })
  // it("returns statement without any deposit or withdrawal", () => {
  //   const account = new Account()
  //   expect(account.getStatement()).toEqual("date || credit || debit || balance")
  // })
})