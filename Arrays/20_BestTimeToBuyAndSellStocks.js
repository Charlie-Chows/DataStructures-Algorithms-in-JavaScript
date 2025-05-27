// LC : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// LC - 121 - easy 


// TC : O ( N )
// SC : O ( 1 )

function bestTimeToBuyAndSellStocks ( arr ) {
    let maxElem = -1;
    let maxProfit = 0;

    for ( let i = arr.length - 1; i >= 0; i-- ) {
        maxElem = Math.max( maxElem, arr[i] );
        let cost = maxElem - arr[i];
        maxProfit = Math.max( cost, maxProfit ); 
    }
    return maxProfit;
}

let arr = [ 7, 1, 5, 3, 6, 4 ];
console.log( bestTimeToBuyAndSellStocks( arr ) );   // 5