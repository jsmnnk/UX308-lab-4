import { lawnMowingTime } from "../src/lawnMowingTime.js";

describe("lawnMowingTime calculates mowing time", function (){
    it("tests small lawn", function (){
        let minutes = lawnMowingTime(10, 5, 5); //area 50 / 5
        expect(minutes).toBe(10);
    });
    it("tests medium lawn", function (){
        let minutes = lawnMowingTime(20, 10, 10); //area 200 / 10
        expect(minutes).toBe(20);
    });
    it("tests large lawn", function (){
        let minutes = lawnMowingTime(30, 20, 15); //area 600 / 15
        expect(minutes).toBe(40);
    });
});