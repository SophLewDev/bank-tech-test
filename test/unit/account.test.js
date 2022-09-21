const Account = require('../../account')
const Deposit = require('../../deposit')
const Withdrawal = require('../../withdrawal')

describe("account", () => {
  it.only("add deposit to account and return deposit", () => {
    const fakeDeposit = {
      date:() => "20/09/2022",
      amount:() => 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.account).toEqual([fakeDeposit])
  })
})