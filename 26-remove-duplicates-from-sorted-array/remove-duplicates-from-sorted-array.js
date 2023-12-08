/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueList = [];
    nums.forEach((v)=>{
        if(!uniqueList.includes(v))
        {uniqueList.push(v);}
    })
    for(i=0;i<uniqueList.length;i++)
    {nums[i]=uniqueList[i]}
    return(uniqueList.length)
};