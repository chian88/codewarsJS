function validateBattlefield(field) {
  // write your magic here

  const ships = {
    'battleship': 0,
    'cruiser': 0,
    'destroyer': 0,
    'submarine': 0,
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (field[i][j] === 1) {
        // starts BFS

        let queue = [[i, j, 'unknown']];
        let count = 0;

        while (queue.length > 0) {
          let [x, y, dir] = queue.shift();
          field[x][y] = 0;
          count += 1;

          if (x - 1 >= 0 && y - 1 >= 0 && field[x - 1][y - 1] === 1) {
            return false;
          }
          if (x - 1 >= 0 && y + 1 < field.length && field[x - 1][y + 1] === 1) {
            return false;
          }

          if (x + 1 < field.length && y - 1 >= 0 && field[x + 1][y - 1] === 1) {
            return false;
          }

          if (x + 1 < field.length && y + 1 < field.length && field[x + 1][y + 1] === 1) {
            return false;
          }


          if (x - 1 >= 0 && field[x - 1][y] === 1 && (dir === 'unknown' || dir === 'vertical')) {
            queue.push([x - 1, y, 'vertical']);
          }

          if (x + 1 < field.length && field[x + 1][y] === 1 && (dir === 'unknown' || dir === 'vertical')) {
            queue.push([x + 1, y, 'vertical']);
          }

          if (y - 1 >= 0 && field[x][y - 1] === 1 && (dir === 'unknown' || dir === 'horizontal')) {
            queue.push([x, y - 1, 'horizontal']);
          }

          if (y + 1 < field[0].length && field[x][y + 1] === 1 && (dir === 'unknown' || dir === 'horizontal')) {
            queue.push([x, y + 1, 'horizontal']);
          }
        }

        if (count === 1) {
          ships['submarine'] += 1;
        } else if (count === 2) {
          ships['destroyer'] += 1;
        } else if (count === 3) {
          ships['cruiser'] += 1;
        } else if (count === 4) {
          ships['battleship'] += 1;
        }
      }
    }
  }
  let result = ships['submarine'] === 4 && ships['destroyer'] === 3 && ships['cruiser'] === 2 && ships['battleship'] === 1;

  return result;
}

let result = validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]);

console.log(result);