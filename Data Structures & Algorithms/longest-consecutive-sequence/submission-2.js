class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set=new Set();
        for(let i=0;i<nums.length;i++){
            set.add(nums[i])
        }
        let longest=0;
        for(let i=0;i<nums.length;i++){
            let seq=0;
            let currNum=nums[i];
            while(set.has(currNum)){
                currNum+=1
                seq+=1;
            }
            longest=Math.max(longest,seq);

        }

        return longest

    }
}
