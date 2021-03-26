function coinChange(coins, amount) {
  //Create an array to store minimum number of coins to change i cent.
  dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  //Start from 1 cent and increment by 1 untill the target amount
  for (let i = 1; i <= amount; i++) {
    // Check possibility with each coin (denominator).
    for (let coin of coins) {
      // If the coin value is greated than the target i cent, it can't be used.
      if (coin <= i) {
        //check the curren value at i with the possible minumum number of coins with the current coin.
        //Store the min value of above comparison.
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  //The result is stored in [amount] index of the dp array.
  //If no coin can change the amount, the elm stays infinity, means return -1.
  return dp[amount] === Infinity ? -1 : dp[amount];
}
