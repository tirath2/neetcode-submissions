class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res={};
        for(let i=0;i<nums.length;i++){
            let remainder=target-nums[i];
            if(res[remainder]>=0){
                    return [res[remainder],i]
               } 
            res[nums[i]]=i
           
        }
    }
}
