const maxWaterContainer = (height) => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const smallerSide = Math.min(height[left], hight[right]);
    const currentArea = (right - left) * smallerSide;
    max = Math.max(max, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    return max;
  }
};
