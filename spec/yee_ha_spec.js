import { yee_ha } from "../src/yee_ha.js";

describe("yee_ha returns correct string", function () {
    it("tests divisible by both 3 and 7", function () {
        expect(yee_ha(21)).toBe("Yee Ha");
    });

    it("tests divisible by 3 only", function () {
        expect(yee_ha(9)).toBe("Yee");
    });

    it("tests divisible by 7 only", function () {
        expect(yee_ha(14)).toBe("Ha");
    });

    it("tests neither", function () {
        expect(yee_ha(10)).toBe("Nada");
    });
});