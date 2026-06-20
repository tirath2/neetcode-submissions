class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS= s.replace(/[^a-zA-Z0-9]/g, "");
        let l=0;
        let r=newS.length-1;

        while(l<r){
            if(newS.charAt(l).toLowerCase()!=newS.charAt(r).toLowerCase()){
               console.log(newS.charAt(l),newS.charAt(r))
                return false
            }
            l++;
            r--;
        }
        return true
    }
}
