function bowling(frameArray) {
  let score = 0;
  frameArray.forEach((element, index) => {
    if (element === 10) {
      score += element + frameArray[index + 1] + frameArray[index + 2];
    } else {
      score += element;
    }
  });

  return score;
}

module.exports = bowling;

