/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let string1 = '';
    let string2 = '';

    for (let index = 0; index < word1.length; index++) {
        string1 += word1[index];
    }
    for (let index = 0; index < word2.length; index++) {
        string2 += word2[index];
    }

    if (string1===string2) {
        return true;
    }else {
        return false;
    }
    
};

const word1 = ["ab", "c"]; 
const word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1,word2));