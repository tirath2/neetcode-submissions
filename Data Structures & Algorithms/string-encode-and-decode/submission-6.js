class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str= strs.reduce((a,v,i)=>{
            
          return  a+=v+"||##"
        },"")
       return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      
        let arr= str.split("||##")
        arr.pop()
        return arr
    }
}
