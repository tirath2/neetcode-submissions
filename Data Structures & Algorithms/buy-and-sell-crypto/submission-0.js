class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuyPrice=prices[0];
        let maxProfit=0;
        for(let i=1;i<prices?.length;i++){
            minBuyPrice=Math.min(minBuyPrice,prices[i]);
            if(prices[i]-minBuyPrice>0){
            maxProfit=Math.max(maxProfit,prices[i]-minBuyPrice)
            }
        }
        return maxProfit
    }
}
