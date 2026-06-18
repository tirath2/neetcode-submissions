class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights?.length-1;
        let max=0;
        

        while(l<r){
            const min=Math.min(heights[l],heights[r]);
            const distance=r-l;
            max=Math.max(max,min*distance);
            if(heights[l]>heights[r]){
               r--
            }else{
                  l++;
            }
        }

        return max
    }
}
