class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            let schar=s.charAt(i);
            let tchar=t.charAt(i);
            if (map.get(schar)) {
                map.set(schar, map.get(schar) + 1);
            } else {
                map.set(schar, 1);
            }
            if (map.get(tchar)) {
                map.set(tchar, map.get(tchar) - 1);
            } else {
                map.set(tchar, -1);
            }
            if (map.get(tchar) == 0) {
                map.delete(tchar);
            }
            if (map.get(schar) == 0) {
                map.delete(schar);
            }
        }
        return !Boolean(map.size);
    }
}
