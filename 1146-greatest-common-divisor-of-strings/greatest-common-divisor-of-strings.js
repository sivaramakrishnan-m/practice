/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let shortString = str1.length>str2.length?str2:str1;
    let longString = str1.length>str2.length?str1:str2;
    let result = "";
    for(i=1;i<=shortString.length;i++){
        if((longString.replaceAll(shortString.substring(0,i),'')=='') && shortString.replaceAll(shortString.substring(0,i),'')==''){
            result = shortString.substring(0,i);
        }
    }
    return(result);
};