function solution(input, markers) {
  sentences = input.split('\n');
  sentences = sentences.map(sentence => {
    for (marker of markers) {
      if (sentence.indexOf(marker) !== -1) {
        sentence = sentence.slice(0, sentence.indexOf(marker));
      }
    }

    return sentence.trim();
  });
  return sentences.join('\n');
};

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);