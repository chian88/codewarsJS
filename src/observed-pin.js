function getPINs(observed) {
  // TODO: This is your job, detective!
  const map = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '8', '7', '9', '0'],
    '9': ['6', '8', '9'],
    '0': ['8', '0']
  }
  let result = [];
  recursion(map, 0, observed, result, '');


  return result;
}

function recursion(map, index, observed, result, temp) {
  if (index === observed.length) {
    result.push(temp);
    return;
  }

  const digit = observed[index];

  for (const potential of map[digit]) {
    temp += String(potential)
    recursion(map, index + 1, observed, result, temp);
    temp = temp.slice(0, -1);
  }
}

getPINs("46");