function sumStrings(a, b) {
  let reversedA = a.split('').reverse().join('');
  let reversedB = b.split('').reverse().join('');
  let result = '';

  let maxLen = reversedA.length > reversedB.length ? reversedA.length : reversedB.length;

  let carry = 0;

  for (let i = 0; i < maxLen; i++) {
    let firstDigit = reversedA.charAt(i) === '' ? 0 : parseInt(reversedA.charAt(i));
    let secondDigit = reversedB.charAt(i) === '' ? 0 : parseInt(reversedB.charAt(i));

    let sum = firstDigit + secondDigit + carry;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result += sum.toString();
  }

  if (carry > 0) {
    result += '1';
  }

  result = result.split('').reverse().join('');

  while (result.length > 0 && result.charAt(0) === '0') {
    result = result.slice(1);
  }

  return result;
}


sumStrings('00103', '08567');
