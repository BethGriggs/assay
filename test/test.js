const chai = require("chai");
const expect = chai.expect;

const index = require('../index');

describe("smoke test", () => {
  it("Should run npm test", () => {
    let testStatus = index.runTest();
    expect(testStatus).to.not.be.undefined;
  });

  it("Should Clone Module", () => {
    let testClone = index.getModule("https://github.com/expressjs/express");
    console.log(testClone.status);
  });
});
