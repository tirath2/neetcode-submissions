class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let codeMap = {};
        for (let i = 0; i < strs.length; i++) {
            let alpb=new Array(26).fill(0);
            let hash=""
            for (let j = 0; j < strs[i].length; j++) {
               let code = strs[i].charCodeAt(j)-"a".charCodeAt(0);
               alpb[code]++
            }
            hash=alpb.join("||")
            if (!codeMap[hash]) {
                codeMap[hash] = [];
            }
            codeMap[hash].push(i);
        }
        let res=[]
        console.log(codeMap,strs)
        for (const [key, value] of Object.entries(codeMap)) {
            let currArr=[];
            for(let i=0;i<value.length;i++){
                currArr.push(strs[value[i]])
            }
            res.push(currArr)
        }
        return res
    }
}

