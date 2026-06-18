class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map={};
        for(let i=0;i<strs.length;i++){
            const sorted=strs[i].split('').sort().join('')
            if(!map[sorted])map[sorted]=[];
            map[sorted]?.push(strs[i])
        }
        let result=[]
        for(const key in map ){
                result.push(map[key])
        }

        return result
    }
}
