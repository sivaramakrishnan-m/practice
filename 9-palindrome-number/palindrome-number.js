/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let tmp = "";
    let strx = x.toString();
    for(let i = strx.length-1;i>=0;i--){
        tmp += strx[i];
    }
    return(tmp==strx?true:false);
};