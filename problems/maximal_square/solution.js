function maximalSquare(matrix) {
  if (!matrix.length) return 0;
  let max = 0;
  let dp = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max ** 2;
}
