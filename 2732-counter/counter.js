/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return ()=>{
        let a = n;
        n = n+1;
        return a;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */