import { squareFeet2acres } from "../src/squareFeet2acres";

describe("squareFeet2acres converts square feet to acres", function (){
    it("tests 43560", function (){
        let acres = squareFeet2acres(43560);
        expect(acres).toBe(1);
    });
    it("tests 21780", function (){
        let acres = squareFeet2acres(21780);
        expect(acres).toBe(0.5);
    });
    it("tests 87120", function (){
        let acres = squareFeet2acres(87120);
        expect(acres).toBe(2);
    });
});