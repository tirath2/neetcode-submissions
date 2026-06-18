class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str=strs[0]
        for(let i=1;i<strs.length;i++){
            
            str+="###$###"+strs[i];
            
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       return str?.split("###$###")||[];
    }
}
