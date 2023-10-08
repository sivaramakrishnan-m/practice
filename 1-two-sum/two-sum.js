/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i, j = 0;
    for(x=0; x<nums.length; x++){
        for(y=x+1; y<nums.length; y++){
            if(nums[x]+nums[y]==target){
                i = x;
                j = y;
                break;
            }
        }
    }
    return([i,j]);
};