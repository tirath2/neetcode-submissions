class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0;i<numbers?.length-1;i++){
            let j=i+1;
            while(numbers[j]+numbers[i]<=target){
                if(numbers[j]+numbers[i]==target){
                    return[i+1,j+1];
                }
                j++;
            }
        }
    }
}
