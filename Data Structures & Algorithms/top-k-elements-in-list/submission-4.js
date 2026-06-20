class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map={};
        
        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]]=0
            }
            map[nums[i]]++;
            
        }
        return Object.entries(map)?.sort((a,b)=>b[1]-a[1]).splice(0,k)?.map((t=>t[0]));
        
        
    }
}
