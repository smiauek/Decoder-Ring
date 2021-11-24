// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const stdAlphabet = "abcdefghijklmnopqrstuvwxyz"                                        // declare standard alphabet constant

  function caesar(input, shift, encode = true) {
    let inputMsg = input.toLowerCase();                                                   // bring input message to lower case
    if (!shift) return false;                                                             // return false when shift wasn't provided
    if (shift > 25 || shift === 0 || shift < -25) return false;                           // return false when shift is 0, or greater than 25, or less than -25
    if (encode === true) {                                                                // when encoding
      let encodedMessage = "";                                                            // declare encoded message to be an empty string    
      for (let i=0; i<inputMsg.length; i++) {                                             // loop through input message
        if (stdAlphabet.includes(inputMsg[i])) {                                          // when charachter from input message is a letter
          if (stdAlphabet.indexOf(inputMsg[i]) + shift > 25) {                            // when shifted index is higher than 25
            encodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) + shift - 26]; // add a letter from standard alphabet at index 26 lower than shifted index
          } else if (stdAlphabet.indexOf(inputMsg[i]) + shift < 0) {                      // when shifted index is smaller than 0
            encodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) + shift + 26]; // add a letter from standard alphabet at Index 26 higher than shifted index
          } else {                                                                        // when shited index is not higher than 25 or not lower than 0
            encodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) + shift];      // add a letter from standard alphabet at shifted index 
          };
        } else {                                                                          // when character from input message is not a letter
          encodedMessage += inputMsg[i];                                                  // add character from input message to encoded message
        };
      };
      return encodedMessage;                                                              // return encoded message

    } else {                                                                              // when decoding
      let decodedMessage = "";
      for (let i=0; i<inputMsg.length; i++) {                                             // loop through input message
        if (stdAlphabet.includes(inputMsg[i])) {                                          // when charachter from input message is a letter
          if (stdAlphabet.indexOf(inputMsg[i]) - shift < 0) {                             // when shifted index is smaller than 0
            decodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) - shift + 26]; // add a letter from standard alphabet at index 26 higher than shifted index
          } else if (stdAlphabet.indexOf(inputMsg[i]) - shift > 25) {                     // when shifted index is higher than 25
            decodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) - shift - 26]; // add a letter from standard alphabet at index 26 lower than shifted index
          } else {                                                                        // when shited index is not higher than 25 or not lower than 0
            decodedMessage += stdAlphabet[stdAlphabet.indexOf(inputMsg[i]) - shift];      // add a letter from standard alphabet at shifted index 
          };
        } else {                                                                          // when character from input message is not a letter
          decodedMessage += inputMsg[i];                                                  // add character from input message to encoded message
        };
      };
      return decodedMessage;                                                              // return decoded message
    };
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
