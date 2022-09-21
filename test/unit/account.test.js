const Account = require('../../src/account')
const Deposit = require('../../src/deposit')
const Withdrawal = require('../../src/withdrawal')

describe("account", () => {

  it("add deposit to account and return deposit", () => {
    const fakeDeposit = {
      transactionType: "DEPOSIT",
      date: "20/09/2022",
      amount: 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.listOfTransactions).toEqual([fakeDeposit])
  })
  it("add withdrawal to account and return withdrawal", () => {
    const fakeDeposit = {
      transactionType: "DEPOSIT",
      date: "20/09/2022",
      amount: 1000
    }
    const fakeWithdrawal = {
      transactionType: "WITHDRAWAL",
      date: "20/09/2022",
      amount: 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    account.addToAccount(fakeWithdrawal)
    expect(account.listOfTransactions).toEqual([fakeDeposit, fakeWithdrawal])
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
    expect(account.getBalance()).toEqual(1000.00)
  })
  it("shows balance after deposit and withdrawal", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const fakeWithdrawal = {
      date: "20/09/2022",
      amount: 500,
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    account.addToAccount(fakeWithdrawal)
    expect(account.getBalance()).toEqual(500.00)
  })
  it("returns statement without any deposit or withdrawal", () => {
    const account = new Account()
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n")
  })
  it("returns statement after adding a deposit to the account", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n20/09/2022 || 1000 || || 1000 ||\n")
  })
  it("returns statement after adding deposit and withdrawal", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const fakeWithdrawal = {
      date: "20/09/2022",
      amount: 500,
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    account.addToAccount(fakeWithdrawal)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n20/09/2022 || 1000 || || 1000 ||\n20/09/2022 || || 500 || 500 ||\n")
  })
  it("returns 'unrecognised transaction type' if date of deposit transaction added is not a string", () => {
    const fakeDeposit = {
      date: 789,
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    expect(account.addToAccount(fakeDeposit)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if date of withdrawal transaction added is not a string", () => {
    const fakeWithdrawal = {
      date: 789,
      amount: 500,
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    expect(account.addToAccount(fakeWithdrawal)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if amount of deposit transaction added is not a number", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: "1000",
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    expect(account.addToAccount(fakeDeposit)).toEqual("Unrecognised transaction type")
  })
  it("returns 'unrecognised transaction type' if amount of withdrawal transaction added is not a number", () => {
    const fakeWithdrawal = {
      date: "20/09/2022",
      amount: "500",
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    expect(account.addToAccount(fakeWithdrawal)).toEqual("Unrecognised transaction type")
  })
  it("returns 'cannot add this transaction to account' if amount to withdraw is larger than the account's balance", () => {
    const fakeDeposit = {
      date: "20/09/2022",
      amount: 500,
      transactionType: "DEPOSIT"
    }
    const fakeWithdrawal = {
      date: "20/09/2022",
      amount: 1000,
      transactionType: "WITHDRAWAL",
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.addToAccount(fakeWithdrawal)).toEqual("Withdraw amount exceeds funds")
  })
})