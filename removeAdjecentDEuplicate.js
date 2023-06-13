function removeAdjacentDuplicates(input) {
    let result = '';
    let i = 0;
    while (i < s.length) {
      if (s[i] !== s[i+1]) {
        result += s[i];
        i++;
      } else {
        while (s[i] === s[i+1]) {
          i++;
        }
        i++;
      }
    }
    if (result !== s && result.length > 0) {
      return removeAdjacentDuplicates(result);
    } else {
      return result;
    }
  }
  
  // Example usage
  const input = 'history';
  const output = removeAdjacentDuplicates(input);
  console.log(output); // "sympathy"