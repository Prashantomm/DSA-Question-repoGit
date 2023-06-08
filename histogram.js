
function calculateMaxRectangleArea(histogram) {
    const stack = [];
    let maxArea = 0;
    let i = 0;
  
    while (i < histogram.length) {
      if (stack.length === 0 || histogram[i] >= histogram[stack[stack.length - 1]]) {
        stack.push(i);
        i++;
      } else {
        const topIndex = stack.pop();
        const height = histogram[topIndex];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
      }
    }
  
    while (stack.length > 0) {
      const topIndex = stack.pop();
      const height = histogram[topIndex];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  
    return maxArea;
  }
  
  // Example usage:
  const histogram = [2, 1, 5, 6, 2, 3];
  const result = calculateMaxRectangleArea(histogram);
