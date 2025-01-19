import { describe, test, it, expect } from "vitest";
import { max,fizzBuzz,calculateAverage  } from "../src/intro";
describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(10, 5)).toBe(10);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(5, 10)).toBe(10);
  });
  it("should return either argument if they are equal", () => {
    expect(max(5, 5)).toBe(5);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if the number is divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if the number is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return the number as a string otherwise", () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});
describe("calculateAverage", () => {
  it("should return the average of an array of numbers", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });
  it("should return 0 if the array is empty", () => {
    expect(calculateAverage([])).toBe(0);
    
  });
});