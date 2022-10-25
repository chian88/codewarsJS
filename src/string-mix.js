function mix(s1, s2) {
  // your code
  let count1 = {};
  let count2 = {};
  let result = [];

  for (let i = 0; i < s1.length; i++) {
    const chr = s1.charAt(i)
    if (/[a-z]/.test(chr)) {
      count1[chr] = count1[chr] ? count1[chr] + 1 : 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const chr = s2.charAt(i)
    if (/[a-z]/.test(chr)) {
      count2[chr] = count2[chr] ? count2[chr] + 1 : 1;
    }
  }
  const keys1 = Object.keys(count1);
  for (let i = 0; i < keys1.length; i++) {
    const numFor1 = count1[keys1[i]];
    const numFor2 = count2[keys1[i]] ? count2[keys1[i]] : 0;

    if (numFor1 <= 1) {
      continue;
    }

    if (numFor1 > numFor2) {
      result.push({
        letter: keys1[i],
        count: numFor1,
        win: '1'
      })
    } else if (numFor2 > numFor1) {
      result.push({
        letter: keys1[i],
        count: numFor2,
        win: '2'
      })
    } else {
      result.push({
        letter: keys1[i],
        count: numFor1,
        win: '3'
      })
    }
  }

  const keys2 = Object.keys(count2);
  for (let i = 0; i < keys2.length; i++) {
    if (count1[keys2[i]] && count1[keys2[i]] > 1) {
      continue;
    }

    const numFor2 = count2[keys2[i]];

    if (numFor2 <= 1) {
      continue;
    }
    result.push({
      letter: keys2[i],
      count: numFor2,
      win: '2'
    });
  }

  result.sort((a, b) => {

    if (a.count > b.count) {
      return -1;
    } else if (a.count < b.count) {
      return 1;
    } else {
      if (a.win === b.win) {
        return a.letter.localeCompare(b.letter);
      }

      return a.win.localeCompare(b.win);
    }

  });

  let finalResult = '';

  for (let i = 0; i < result.length; i++) {
    finalResult += `${result[i].win === '3' ? '=' : result[i].win}:${result[i].letter.repeat(result[i].count)}/`
  }

  finalResult = finalResult.slice(0, -1);

  return finalResult;
}



