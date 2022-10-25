var calc = function (expression) {
  // evaluate `expression` and return result
  let exprStr = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression.charAt(i);
    if (char === '(' || char === ')') {
      exprStr.push(char);
    } else if (/[+\-*/]/.test(char)) {
      exprStr.push(char);
    } else if (/[0-9\.]/.test(char)) {
      let j = i + 1;

      while (j < expression.length && /[0-9\.]/.test(expression.charAt(j))) {
        j++;
      }

      let number = expression.slice(i, j);
      exprStr.push(number);
      i = j - 1;
    }
  }
  let i = 0;
  while (exprStr.includes(')')) {
    if (exprStr[i] === ')') {
      // pop stack until encounter (
      let j = i - 1;
      while (j >= 0 && exprStr[j] !== '(') {
        j--;
      }

      const smallStr = exprStr.slice(j + 1, i);
      const smallRes = eval(smallStr);

    }
    i++;
  }

  return exprStr;
};


function eval(exprStr) {
  while (exprStr.length > 1) {
    for (let i = 0; i < exprStr.length; i++) {
      if (exprStr[i] === '*') {
        const res = parseFloat(exprStr[i - 1]) * parseFloat(exprStr[i + 1]);
        exprStr[i + 1] = res;
        exprStr.splice(i - 1, 2);

        break;
      }

      if (exprStr[i] === '/') {
        const res = parseFloat(exprStr[i - 1]) / parseFloat(exprStr[i + 1]);
        exprStr[i + 1] = res;
        exprStr.splice(i - 1, 2);

        break;
      }
    }
  }
}


console.log(calc('2 / (2 + 3) * 4.33 - -6'));

