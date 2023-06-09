
function maxIncreasingTrees(heights) {
    const n = heights.length;
    let maxCount = 0;
  
    function findMaxCount(currentIndex, previousHeight) {
      if (currentIndex === n) {
        return 0;
      }
  
      let countWithoutCurrent = findMaxCount(currentIndex + 1, previousHeight);
  
      let countWithCurrent = 0;
      if (heights[currentIndex] > previousHeight) {
        countWithCurrent = findMaxCount(currentIndex + 1, heights[currentIndex]) + 1;
      }
  
      return Math.max(countWithoutCurrent, countWithCurrent);
    }
  
    for (let i = 0; i < n; i++) {
      maxCount = Math.max(maxCount, findMaxCount(i, -Infinity));
    }
  
    return maxCount;
  }
  
  // example usage
  const heights = [10, 22, 9, 3, 3, 21, 50, 41, 60, 80];
