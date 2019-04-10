"use-strict";

function matrixGenerator(rows, columns) {
  // do work here
  let result = [];

  for (let i = 0; i < rows; i++) {
    let newArr = [];

    for (let j = 0; j < columns; j++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      newArr.push(randomNumber);
    };

    let sortArr = newArr.sort((a,b) => a-b);
    result.push(sortArr);
  };

  let sortResult = result.sort((a,b) => a[0] - b[0]);
  return sortResult;
}

module.exports = matrixGenerator;