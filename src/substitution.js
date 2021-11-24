// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const stdAlphabet = "abcdefghijklmnopqrstuvwxyz"                                     //declare standard aplhabet constant

  function substitution(input, alphabet, encode = true) {
    if (!input) return false;                                                          //check if input message was provided, return false if it hasn't
    if (typeof alphabet !== "string" || alphabet.length !== 26) return false;          //check if substitution alphabet is a string of exactly 26 characters, if not, return false
    let alphabetArr = alphabet.split("");                                              // make array out of characters in substitution alphabet
    for (let i=0; i<alphabetArr.length; i++) {
     if (alphabetArr.filter(char => char === alphabetArr[i]).length > 1) return false; // when character appears more than once in substitution alphabet, return false
    };
    const message = input.toLowerCase();                                               // declare message to be input message converted to lower case
    if (encode === true) {                                                             //when encoding 
      let codedMessage = "";                                                           //declare coded message to be empty string
      for (let i=0; i<message.length; i++) {                                           //loop through input message
        if (stdAlphabet.includes(message[i])) {                                        //if charachter from input is a letter within standard alphabet
          codedMessage += alphabet[stdAlphabet.indexOf(message[i])];                   //add corresponding character from substitution alphabet to coded message string
        } else {
          codedMessage += message[i];                                                  //if character from input is not a letter, add character from input message
        };
      };
      return codedMessage;                                                             // return encoded message

    } else {                                                                           // when decoding
      let decodedMessage = "";                                                         //declare decoded message to be empty string
      for (let i=0; i<message.length; i++) {                                           //loop through input message
        if (alphabet.includes(message[i])) {                                           // if charachter from input is a character within substitution alphabet
          decodedMessage += stdAlphabet[alphabet.indexOf(message[i])];                 // add corresponding letter from standard alphabet to decoded message string
        } else {
          decodedMessage += message[i];                                                // if character from input is not a character from substitution alphabet, add character from input message
        };
      };
      return decodedMessage;                                                           // return decoded message
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
