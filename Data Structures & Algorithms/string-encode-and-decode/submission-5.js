class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str= strs.reduce((a,v,i)=>{
            
          return  a+=v+"||##"
        },"")
        console.log("strencode",str)
       return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("strdecode",str)
      
        let arr= str.split("||##")
        arr.pop()
        return arr
    }
}
