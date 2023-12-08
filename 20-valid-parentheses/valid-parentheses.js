/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {
        "}":"{", "]":"[", ")":"("
    };
    let runningStack = [];
    for(let i=0; i<s.length; i++){
        if(pairs[s[i]]){
            let poped = runningStack.pop();
            if(!poped){
                return false;
            }else if(pairs[s[i]]!=poped){
                return false;
            }
        }else{
            runningStack.push(s[i]);
        }
    }
    if(runningStack=="") return true;
    else return false;
};