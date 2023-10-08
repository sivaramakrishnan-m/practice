/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i, j = 0;
    try{
        nums.forEach((num,index)=>{
            nums.forEach((val,vindex)=>{
                if(index!==vindex){
                    if(val+num==target){
                        i = index;
                        j = vindex;
                        throw new Error();
                    }
                }
            })
        });
    }catch(e){
        return([i,j]);
    }
    return([i,j]);
};