// leetcode : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// leetcode - 121 - easy

function bestTimeToBuyAndSellStock ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let mini = nums[0];
    let profit = 0;
    for ( let i = 1; i < n; i++ ) {
        let cost = nums[i] - mini;
        profit = Math.max(profit, cost);
        mini = Math.min(mini, nums[i]);
    }
    return profit;
}

let nums = [7, 1, 5, 3, 6, 4]
console.log( bestTimeToBuyAndSellStock( nums ) );  // 5  → (Buy at 1, Sell at 6)