snail = function (array) {
  // enjoy

  let top = 0;
  let left = 0;
  let right = array.length;
  let down = array.length;
  let count = 0;
  let total = array[0].length * array[0].length;
  let result = [];

  while (count < total) {
    // top left to top right
    for (let j = left; j < right; j++) {
      result[count++] = array[top][j];
    }

    // top right to bottom right
    for (let i = top + 1; i < down - 1; i++) {
      result[count++] = array[i][right - 1];
    }

    // bottom right to bottom left
    for (let j = right - 1; j > left; j--) {
      result[count++] = array[down - 1][j];
    }

    // bottom left to top left
    for (let i = down - 1; i > top; i--) {
      result[count++] = array[i][left];
    }

    top++;
    right--;
    left++;
    down--;

  }

  return result;
}

snail([[]]);