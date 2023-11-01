const inputArray = [1, 2, 2, 3, 4, 4, 5, 5];

function findDuplicate(inputArray) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = i + 1; j < inputArray.length; j++) {
        if (inputArray[i] === inputArray[j] && !result.includes(inputArray[i])) {
          result.push(inputArray[i]);
        }
      }
    }
    return result;
  }
  
	const result = findDuplicate(inputArray);
	console.log(result); // Should print [2, 4, 5]



