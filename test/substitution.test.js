const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution() tests written by Piotr Smialkowski", () => {
    it("should return false when substitution alphabet is not exactly 26 characters long", () => {
        let message = "helicopter"
        let alphabet = "ouytrgnmkjhds"
        let actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });
    it("should returne false when there are any duplicates in substitution alphabet", () => {
        let message = "helicopter";
        let alphabet = "qwertqwertqwertqwertqwertq";
        let actual = substitution(message, alphabet)
        expect(actual).to.be.false;
    });
    it("should correctly translate given message, based on provided substitution alphabet", () => {
        let message = "helicopter";
        let alphabet = "plokmijnuhbygvtfcrdxeszwaq";
        let expected = "nmyuotfxmr";
        let actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        let lowerMessage = "helicopter";
        let upperMessage = "HELIcoPtER";
        let alphabet = "mnbvcxzasdfghjklpoiuytrewq";
        let upperActual = substitution(upperMessage, alphabet);
        let lowerActual = substitution(lowerMessage, alphabet);
        expect(upperActual).to.equal(lowerActual);
    });
    it("should preserve spaces when encoding", () => {
        let message = "two helicopters";
        let alphabet = "plokmijnuhbygvtfcrdxeszwaq";
        let actual = substitution(message, alphabet);
        expect(actual).to.include(" ");
    });
    it("should preserve spaces when decoding", () => {
        let message = "xzt nmyuotfxmrd";
        let alphabet = "plokmijnuhbygvtfcrdxeszwaq";
        let actual = substitution(message, alphabet, false);
        expect(actual).to.include(" ");
    });
});    
