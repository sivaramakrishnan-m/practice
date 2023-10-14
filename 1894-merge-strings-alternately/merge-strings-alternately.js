/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let max = word1.length>word2.length?word1.length:word2.length;
    for(i=0;i<max;i++){
        result = result.concat((word1[i]?word1[i]:''),word2[i]?word2[i]:'');
    }
    return result;
};