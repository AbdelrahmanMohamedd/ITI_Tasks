const { MathUtils, obj, sayHelloWorld } = require("../index");

describe("Testing for MathUtils function", () => {

  var math1;

  beforeEach(() => {
    math1 = new MathUtils();
  });
  
  it("Test Sum function", () => {
    expect(math1.sum(13, 7)).toEqual(20);
  });

  it("Test Substract function", () => {
    expect(math1.substract(15, 5)).toEqual(10);
  });

  it("Test Multiply function", () => {
    expect(math1.multiply(20, 5)).toEqual(100);
  });

  it("Test Divide function", () => {
    expect(math1.divide(30, 2)).toEqual(15);
  });

  it("Test Average function", () => {
    expect(math1.average(30, 40)).toEqual(35);
  });

  it("Test Factorial function", () => {
    expect(math1.factorial(5)).toEqual(120);
  }); 

});

