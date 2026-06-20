class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length).fill(0);
        let suffix = new Array(nums.length).fill(0);
        for (let i = 0; i < nums?.length; i++) {
            let j = nums.length - 1 - i;
            if (i == 0) {
                prefix[i] = nums[i];
                suffix[j] = nums[j];
                continue
            }
            let pre=nums[i]*prefix[i-1];
            let suf=nums[j]*suffix[j+1];
            prefix[i]=pre;
            suffix[j]=suf;
        }
        let res=[]
         for(let i=0;i<nums.length;i++){
           let prev=prefix[i-1]??1;
           let next=suffix[i+1]??1;
           res.push(prev*next)
        }
        return res;
    }
}
