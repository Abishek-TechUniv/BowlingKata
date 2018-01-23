function bowling(frameArray) {
  let score = 0;
  frameArray.forEach((element) => {
    score += element;
  });

  return score;
}

module.exports = bowling;

