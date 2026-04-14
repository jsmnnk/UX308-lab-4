import { airQuality } from "../src/airQuality.js";

describe("airQuality returns correct AQI category", function () {
    it("tests Good", function () {
        expect(airQuality(25)).toBe("Good");
    });

    it("tests Moderate", function () {
        expect(airQuality(75)).toBe("Moderate");
    });

    it("tests Unhealthy for Sensitive Groups", function () {
        expect(airQuality(125)).toBe("Unhealthy for Sensitive Groups");
    });

    it("tests Unhealthy", function () {
        expect(airQuality(175)).toBe("Unhealthy");
    });

    it("tests Very Unhealthy", function () {
        expect(airQuality(250)).toBe("Very Unhealthy");
    });

    it("tests Hazardous", function () {
        expect(airQuality(350)).toBe("Hazardous");
    });
});