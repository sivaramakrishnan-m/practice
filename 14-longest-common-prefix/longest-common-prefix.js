/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonString = "";
    if(strs.length==1){
        return strs[0];
    }else{
        strs = strs.sort();
        for(let i=0; i<strs[0].length; i++){
            let inall = true;
            for(let j=1; j<strs.length; j++){
                if(strs[j][i]!=strs[0][i]){
                    inall = false;
                    break;
                }
            }
            if(inall){commonString += strs[0][i]}
            else{break};
        }
    }
  return commonString;
};