class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap={};
        const frequecy=Array.from({ length: nums.length + 1 }, () => []);
        for(let num of nums){
            countMap[num]=(countMap[num]||0)+1
        }
        for(const count in countMap){
            frequecy[countMap[count]]?.push(count)
        }
        const result=[];
        console.log(frequecy)
        for(let i=frequecy?.length-1;i>0;i--){
            for(const num of frequecy[i]){
                    result.push(num);
                    if(result.length===k) return result
            }
        }
    }
} 
