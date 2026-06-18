class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start=0;
        let maxString=0;
        let end=0;
        let currSet=new Set()
        while(start<s.length){
            if(currSet.has(s.charAt(end))){
                currSet.delete(s.charAt(start));
                start++;
                continue;
            }
            
            currSet.add(s.charAt(end))
            console.log(currSet)
            maxString=Math.max(maxString,currSet.size)
            end++;
            if(end==s.length){
                 currSet.delete(s.charAt(start));
                start++;
            }
        }

        return maxString
    }
}
