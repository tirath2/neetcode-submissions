class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
        const stringMap={};
        for(let i=0;i<t?.length;i++){
            if(!stringMap[t[i]]) stringMap[t[i]]=0
            stringMap[t[i]]++;
        }
        
        for(let i=0;i<s?.length;i++){
            if(!stringMap[s[i]]) return false
            stringMap[s[i]]--
        }
        return true
    }
}
