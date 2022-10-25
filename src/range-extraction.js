function solution(list) {
  // TODO: complete solution 
  let i = 0;
  let j = 0;
  let arr = []
  let result = '';

  while (i < list.length) {
    if (list[i + 2] - list[i] === 2) {
      j = i + 2;
      let count = 2;

      while (j < list.length && list[j] - list[i] === count) {
        j++;
        count++;
      }
      result += list[i] + '-' + list[j - 1];
      i = j - 1;
    } else {
      result += list[i];

    }

    arr.push(result);
    result = '';
    i++;
  }
  return arr.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));