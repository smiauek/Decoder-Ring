// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const polybiusObj = {                                                                            // declare object representing polybius square
    a:"11", b:"21", c:"31", d:"41",         e:"51",
    f:"12", g:"22", h:"32", i:"42", j:"42", k:"52",
    l:"13", m:"23", n:"33", o:"43",         p:"53",
    q:"14", r:"24", s:"34", t:"44",         u:"54",
    v:"15", w:"25", x:"35", y:"45",         z:"55",
  };

  function polybius(input, encode = true) {
    if (encode === true) {                                                                         // when encoding
      if (!input) return false;                                                                    // if no input, return false
      let inputLower = input.toLowerCase();                                                        // bring input to lower case
      let encodedMessage = "";                                                                     // declare encoded message to be empty string     
      for (let i=0; i<inputLower.length; i++) {                                                    // loop thorugh input message
        if (polybiusObj[inputLower[i]]) {                                                          // when charachter from input is found as a key in polybius object
        encodedMessage += polybiusObj[inputLower[i]];                                              // add value of the key to encoded message
        } else {                                                                                   // when character from input is not found as a key in polybius object
          encodedMessage += inputLower[i];                                                         // add character from input to encoded message
        };      
      };
      return encodedMessage;                                                                       // return encoded message

    } else {                                                                                       // when decoding
      if (Number.isInteger(input.replaceAll(" ", "").length /2)) {                                 // check if number of digits in input message is even
      let decodedMessage = "";                                                                     // declare decoded message to be empty string
      const digits = "12345";                                                                      // declare possible digits
      for (let i=0; i<input.length; i++) {                                                         // loop thorugh inputted message
        if (digits.includes(input[i])) {                                                           // when charachter is one of possible digits
          let temp = input[i] + input[i+1]                                                         // declare temp value to be a string made out of digit at index i and digit at the next index
          if (temp == 42) {                                                                        // when decoding value 42
            decodedMessage += "i/j";                                                               // add "i/j" to decoded message
            i++;                                                                                   // skip one iteration
          } else {                                                                                 // when decoding other values than 42
            decodedMessage += Object.keys(polybiusObj).find(key => polybiusObj[key] === temp);     // add key corresponding to value from temp, to decoded message
            i++;                                                                                   // skip one iteration
          };       
        } else {                                                                                   // when character is not one of possible digits
          decodedMessage += input[i];                                                              // add character from input message to decoded message
        };
      };
      return decodedMessage;                                                                       // return decoded message
      } else {
        return false;                                                                              // when number of digits in input message is odd, return false
      };    
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
