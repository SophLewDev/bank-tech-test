const Withdrawal = require('../withdrawal')

describe("deposit", () => {
  it("returns date of withdrawal", () => {
    const withdrawal = new Withdrawal("20/09/2022",1000)
    expect(withdrawal.date).toEqual("20/09/2022")
  });
});