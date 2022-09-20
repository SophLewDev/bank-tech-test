const Deposit = require('../deposit')

describe("deposit", () => {
  it("returns date of dpeosit", () => {
    const deposit = new Deposit("20/09/2022",1000)
    expect(deposit.date).toEqual("20/09/2022")
  });
});