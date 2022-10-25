function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  let count = 0;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[0].length; j++) {
      if (puzzle[i][j] === 0) {
        puzzle[i][j] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        count += 1;
      }
    }
  }

  while (count > 0) {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[0].length; j++) {
        let possibility = puzzle[i][j];

        if (!Array.isArray(possibility)) {
          continue;
        }

        if (possibility.length === 1) {
          puzzle[i][j] = possibility[0];
          count--;
        } else {
          possibility = eliminatePossibilityCol(possibility, puzzle, i, j);
          possibility = eliminatePossibilityRow(possibility, puzzle, i, j);
          possibility = eliminatePossibilitySquare(possibility, puzzle, i, j);
          puzzle[i][j] = possibility;
        }
      }
    }
  }

  return puzzle;
}

function helper(rowLimit, colLimit, puzzle, possibility, i, j) {
  for (let row = rowLimit; row < rowLimit + 3; row++) {
    for (let col = colLimit; col < colLimit + 3; col++) {
      if (Array.isArray(puzzle[row][col])) {
        continue;
      }

      if (row === i && col === j) {
        continue;
      }

      possibility = possibility.filter(num => num !== puzzle[row][col]);
    }
  }
  return possibility;
}

function eliminatePossibilitySquare(possibility, puzzle, i, j) {
  if (i <= 2 && j <= 2) {
    return helper(0, 0, puzzle, possibility, i, j)
  } else if (i <= 2 && j <= 5) {
    return helper(0, 3, puzzle, possibility, i, j)
  } else if (i <= 2 && j <= 8) {
    return helper(0, 6, puzzle, possibility, i, j)
  } else if (i <= 5 && j <= 2) {
    return helper(3, 0, puzzle, possibility, i, j)
  } else if (i <= 5 && j <= 5) {
    return helper(3, 3, puzzle, possibility, i, j)
  } else if (i <= 5 && j <= 8) {
    return helper(3, 6, puzzle, possibility, i, j)
  } else if (i <= 8 && j <= 2) {
    return helper(6, 0, puzzle, possibility, i, j)
  } else if (i <= 8 && j <= 5) {
    return helper(6, 3, puzzle, possibility, i, j)
  } else if (i <= 8 && j <= 8) {
    return helper(6, 6, puzzle, possibility, i, j)
  }
}


function eliminatePossibilityRow(possibility, puzzle, i, j) {
  for (let col = 0; col < puzzle.length; col++) {
    if (Array.isArray(puzzle[i][col])) {
      continue;
    }

    if (col === j) {
      continue;
    }

    possibility = possibility.filter(num => num !== puzzle[i][col]);
  }
  return possibility;
}

function eliminatePossibilityCol(possibility, puzzle, i, j) {
  for (let row = 0; row < puzzle.length; row++) {
    if (Array.isArray(puzzle[row][j])) {
      continue;
    }

    if (row === i) {
      continue;
    }

    possibility = possibility.filter(num => num !== puzzle[row][j]);
  }
  return possibility;
}

sudoku([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]]);