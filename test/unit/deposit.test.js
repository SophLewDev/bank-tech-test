const Deposit = require('../../src/deposit')

describe("deposit", () => {
  it("returns date of deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    expect(deposit.date).toEqual("20/09/2022")
  });
  it("returns amount of deposit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    expect(deposit.amount).toEqual(1000)
  })
});