class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remainderMap={};
        for(let i=0;i<nums.length;i++){
            const existingRemainder=remainderMap[target-nums[i]];
            if(existingRemainder?.length){
                return [existingRemainder[0],i]
            }
            if(!remainderMap[nums[i]])remainderMap[nums[i]]=[];
            remainderMap[nums[i]]?.push(i);
        }

        return []

        
    }
}
