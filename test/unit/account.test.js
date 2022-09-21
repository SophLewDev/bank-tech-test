const Account = require('../../account')
const Deposit = require('../../deposit')
const Withdrawal = require('../../withdrawal')

describe("account", () => {

  it("add deposit to account and return deposit", () => {
    const fakeDeposit = {
      date:() => "20/09/2022",
      amount:() => 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.account).toEqual([fakeDeposit])
  })
  it("add withdrawal to account and return withdrawal", () => {
    const fakeWithdrawal = {
      date:() => "20/09/2022",
      amount:() => 1000
    }
    const account = new Account()
    account.addToAccount(fakeWithdrawal)
    expect(account.account).toEqual([fakeWithdrawal])
  })
  it("shows balance is 0 / empty", () => {
    const account = new Account()
    expect(account.getBalance()).toEqual(0.00)
  })
  it("shows balance after adding deposit", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    console.log(account.account)
    account.calculate()
    expect(account.getBalance()).toEqual(1000.00)
  })
})