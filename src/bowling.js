function bowling(frameArray) {
  let score = 0;
  let frame = 0;
  let flag = false;
  for (let index = 0; index < frameArray.length; index += 1) {
    const element = frameArray[index];
    const prev = frameArray[index - 1];
    if (frame === 10) return score;
    if (element === 10) {
      frame += 1;
      score += element + frameArray[index + 1] + frameArray[index + 2];
    } else if (element + prev === 10 && flag) {
      frame += 1;
      flag = false;
      score += element + frameArray[index + 1];
    } else {
      if (flag) frame += 1;
      flag = !flag;
      score += element;
    }
  }

  return score;
}

module.exports = bowling;

