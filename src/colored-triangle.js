function triangle(row) {
  let newRow = ''
  while (row.length > 1) {
    for (let i = 0; i < row.length - 1; i++) {
      if (row.charAt(i) === row.charAt(i + 1)) {
        newRow += row.charAt(i);
      } else if (row.charAt(i) === 'R' && row.charAt(i + 1) === 'G') {
        newRow += 'B';
      } else if (row.charAt(i) === 'R' && row.charAt(i + 1) === 'B') {
        newRow += 'G';
      } else if (row.charAt(i) === 'G' && row.charAt(i + 1) === 'R') {
        newRow += 'B';
      } else if (row.charAt(i) === 'G' && row.charAt(i + 1) === 'B') {
        newRow += 'R';
      } else if (row.charAt(i) === 'B' && row.charAt(i + 1) === 'R') {
        newRow += 'G';
      } else if (row.charAt(i) === 'B' && row.charAt(i + 1) === 'G') {
        newRow += 'R';
      }
    }

    row = newRow;
    newRow = '';
  }

  return row;
}
console.log('hi')
console.log(triangle('GB'));