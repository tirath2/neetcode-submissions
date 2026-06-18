class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(numsa) {
        let nums=numsa?.sort((a,b)=>b-a);
        let result=[]
        for(let i=0;i<nums.length;i++){
            if(nums[i]===nums[i-1]) continue;
            let r=nums?.length-1;
            let l=i+1;
            
            
            while(l<r){
                if(l==i){
                l++;
            }
            if(r==i){
                r--;
            }
                if(nums[l]+nums[r]===-nums[i]){
                    result.push([nums[i],nums[l],nums[r]])
                     l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }else if(nums[l]+nums[r]>-nums[i]){
                    l++
                }else{
                    r--
                }
            }

           
        }


         

                return result
        

    }
}
