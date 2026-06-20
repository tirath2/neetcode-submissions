class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < 9; r++) {
            let rowSet = new Set();
            let colSet = new Set();
            let squareSet = new Set();

            for (let c = 0; c < 9; c++) {
                let rEl = board[r][c];
                let cEl = board[c][r];
                let boxR = Math.floor(c / 3) + Math.floor(r / 3) * 3;
                let boxc = (c % 3) + (r % 3) * 3;
                let boxel = board[boxR][boxc];
                if (rowSet.has(rEl) || colSet.has(cEl) || squareSet.has(boxel)) {
                    return false;
                }
                if (rEl != ".") {
                    rowSet.add(rEl);
                }
                 if (cEl != ".") {
                    colSet.add(cEl);
                }
                 if (boxel != ".") {
                    squareSet.add(boxel);
                }

               
            }
        }
        return true;
    }
}
