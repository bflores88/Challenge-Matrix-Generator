function matrixGenerator(rows, columns) {
  // do work here
  let result = [];

  //Generate random arrays and sort before pushing into result
  for (let i = 0; i < rows; i++) {
    let newArr = [];

    for (let j = 0; j < columns; j++) {
      let randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      newArr.push(randomNumber);
    }

    result.push(newArr.sort());
  }

  //Sort arrays in result by first index
  for (let k = 0; k < result.length; k++) {
    let smallestIndex = k;
    let smallestElement = result[k][0];

    for (let m = k + 1; m < result.length; m++) {
      if (result[m][0] < smallestElement) {
        smallestIndex = m;
        smallestElement = result[m][0];
      };
    }

    if (smallestIndex !== k) {
      let temp = result[k];
      result[k] = result[smallestIndex];
      result[smallestIndex] = temp;
    };

  }

  return result;
}

module.exports = matrixGenerator;