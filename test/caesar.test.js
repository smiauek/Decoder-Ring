const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar() tests written by Piotr Smialkowski", () => {
    let message = "Coffee Time!"

    it("should return false if shift wasn't provided", () => {
        let actual = caesar(message);
        expect(actual).to.be.false;
    });
    it("should return false for shift equal to 0", () => {
        let shift = 0;   
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false for shift less than -25", () => {
        let shift = -30;
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false for shift greater than 25", () => {
        let shift = 35;
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
        let messageLowerCase = "coffee time!"
        let shift = 8;
        let actual = caesar(message, shift);
        let actualLowerCase = caesar(messageLowerCase, shift);
        expect(actual).to.equal(actualLowerCase);
    });
    it("should handle shifts going beyond the end of alphabet", () => {
        let shift = 24;
        let expected = "amddcc rgkc!"
        let actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts going beyond the beginning of alphabet", () => {
        let shift = -24;
        let expected = "eqhhgg vkog!"
        let actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces or special characters when encoding", () => {
        let shift = 7;
        let actual = caesar(message, shift);
        expect(actual).to.include(" ");
        expect(actual).to.include("!")
    });
    it("should preserve spaces or special characters when decoding", () => {
        let shift = 7;
        let altMessage = "jvmmll aptl!"
        let actual = caesar(altMessage, shift, false);
        expect(actual).to.include(" ");
        expect(actual).to.include("!")
    });
});
