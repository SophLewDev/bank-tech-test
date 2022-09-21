const Withdrawal = require('../../src/withdrawal')

describe("deposit", () => {
  it("returns date of withdrawal", () => {
    const withdrawal = new Withdrawal("20/09/2022",1000)
    expect(withdrawal.date).toEqual("20/09/2022")
  });
  it("returns amount of withdrawal", () => {
    const withdrawal = new Withdrawal("20/09/2022",1000)
    expect(withdrawal.amount).toEqual(1000)
  });
});