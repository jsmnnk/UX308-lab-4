import { slope } from "../src/slope.js";

describe("slope calculates correctly", function () {
    it("tests positive slope", function () {
        expect(slope(1, 2, 3, 6)).toBe(2); // rise 4 / run 2
    });

    it("tests negative slope", function () {
        expect(slope(2, 5, 4, 1)).toBe(-2); // rise -4 / run 2
    });

    it("tests fractional slope", function () {
        expect(slope(0, 0, 2, 1)).toBeCloseTo(0.5);
    });
});