const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius() tests written by Piotr Smialkowski", () => {
    it("should accurately encode a message, with both i and j being encoded to 42", () => {
        let message = "Where is Jim?";
        let expected = "2532512451 4234 424223?";
        let actual = polybius(message);
        expect(actual).to.equal(expected);
    });
    it("should accurately decode a message, with 42 being decoded to i/j", () => {
        let message = "424223 4234 32512451";
        let expected = "i/ji/jm i/js here";
        let actual = polybius(message, false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        let upperMessage = "CaMeL iS tHiRsTy";
        let lowerMessage = "camel is thirsty";
        let upperActual = polybius(upperMessage);
        let lowerActual = polybius(lowerMessage);
        expect(upperActual).to.equal(lowerActual);
    });
    it("should preserve spaces when encoding", () => {
        let message = "blue plane";
        let actual = polybius(message);
        expect(actual).to.include(" ");
    });
    it("should preserve spaces when decoding", () => {
        let message = " 21135451 5313113351";
        let actual = polybius(message, false);
        expect(actual).to.include(" ");
    });
});