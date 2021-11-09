const price = [14,56,12,39,69,84,32]

// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock
var maxProfit = function(prices) {
    let mProfit = 0;
    let lowestPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
     let newPrice = prices[i];
     if (newPrice < lowestPrice) lowestPrice = newPrice;
     let profit = newPrice - lowestPrice
     mProfit = Math.max(profit, mProfit);
     console.log(mProfit) 
         
      
        
    }
};

maxProfit(price)
