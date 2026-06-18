class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regExp = /[^a-z0-9]/g;
        let stringWithoutChar=s.toLowerCase().replace(regExp, '');
        
         let l=0;
        let r=stringWithoutChar.length-1;
       
        while(l<r){
            if(stringWithoutChar.charAt(l)===stringWithoutChar.charAt(r)){
                l++;
                r--;
            }else{
                return false
            }
        }
        return true
    }
}
