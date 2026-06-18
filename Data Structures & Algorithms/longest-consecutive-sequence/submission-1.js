class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest=0;
        const numSet=new Set(nums);
        for(let i=0;i<nums.length;i++){
            if(!numSet.has(nums[i]-1)){
                let length=1;
                while(numSet.has(nums[i]+length)){
                    length++
                }
                longest=Math.max(longest,length)
            }
        }
        return longest
    }
}
