// make one horizonJoin function return arry of string
//make one verticalJoin function return arry of string
// use the wordSearch check array

const verJoin = function (matrix) {
  let newArr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let subArr = [];
    for (let j = 0; j < matrix.length; j++) {
      subArr.push(matrix[j][i]);
    }
    newArr.push(subArr.join(''));
  }

  return newArr;
};

const wordSearch = (letters, word) => {
  word = word.toUpperCase();
  const horizontalJoin = letters.map((ls) => ls.join(''));
  // console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verArr = verJoin(letters);
  for (let i in verArr) {
    if (verArr[i].includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;
