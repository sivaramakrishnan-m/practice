/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = (n)=> ()=>{ let temp=n; n= n+1; return temp;};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */