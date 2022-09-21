const Account = require('../../account')
const Deposit = require('../../deposit')
const Withdrawal = require('../../withdrawal')

describe("account", () => {
  it("add deposit to account and return deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.listOfTransactions).toEqual([deposit])
  })
  it("add withdrawal to account and return withdrawal", () => {
    const account = new Account()
    const deposit = new Deposit("20/09/2022",1000)
    const withdrawal = new Withdrawal("20/09/2022",1000)
    account.addToAccount(deposit)
    account.addToAccount(withdrawal)
    expect(account.listOfTransactions).toEqual([deposit, withdrawal])
  })
  it("shows balance after adding deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.getBalance()).toEqual(1000.00)
  })
  it("shows balance after deposit and withdrawal", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const withdrawal = new Withdrawal("20/09/2022",500)
    const account = new Account()
    account.addToAccount(deposit)
    account.addToAccount(withdrawal)
    expect(account.getBalance()).toEqual(500.00)
  })
  it("returns statement after adding a deposit to the account", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n20/09/2022 || 1000 || || 1000 ||\n")
  })
  it("returns statement after adding deposit and withdrawal", () => {
    const deposit = new Deposit("20/09/2022",1000)
    const withdrawal = new Withdrawal("20/09/2022",500)
    const account = new Account()
    account.addToAccount(deposit)
    account.addToAccount(withdrawal)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n20/09/2022 || 1000 || || 1000 ||\n20/09/2022 || || 500 || 500 ||\n")
  })
  it("returns 'unrecognised transaction type' if date of deposit transaction added is not a string", () => {
    const deposit = new Deposit(789,1000)
    const account = new Account()
    expect(account.addToAccount(deposit)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if date of withdrawal transaction added is not a string", () => {
    const withdrawal = new Withdrawal(789,1000)
    const account = new Account()
    expect(account.addToAccount(withdrawal)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if amount of deposit transaction added is not a number", () => {
    const deposit = new Deposit("20/09/2022","1000.00")
    const account = new Account()
    expect(account.addToAccount(deposit)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if amount of withdrawal transaction added is not a number", () => {
    const withdrawal = new Withdrawal("20/09/2022","1000.00")
    const account = new Account()
    expect(account.addToAccount(withdrawal)).toEqual("Unrecognised transaction type")
  })
  it("returns 'cannot add this transaction to account' if amount to withdraw is larger than the account's balance", () => {
    const account = new Account()
    const deposit = new Deposit("20/09/2022",500)
    const withdrawal = new Withdrawal("20/09/2022",1000)
    account.addToAccount(deposit)
    expect(account.addToAccount(withdrawal)).toEqual("Withdraw amount exceeds funds")
  })
})