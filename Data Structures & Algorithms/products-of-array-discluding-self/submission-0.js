class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix=[...nums];
        const suffix=[...nums];
        prefix[0]=1;
        suffix[nums.length-1]=1;
        for(let i=1;i<nums.length;i++){
            prefix[i]=nums[i-1]*prefix[i-1];
        }
        console.log("prefix",prefix)
        //[1,1,2,8]
         for(let i=nums?.length-2;i>=0;i--){
           suffix[i]=nums[i+1]*suffix[i+1]
        }
        console.log("suffix",suffix)

        //[48,24,6,1]
        let result=[];
        for(let i=0;i<nums.length;i++){
            result.push(prefix[i]*suffix[i])
        }
        return result
     


        
    }
}
