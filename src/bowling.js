function bowling(frameArray) {
  if (frameArray.length < 10 || frameArray.length > 21) return 'Invalid Input';

  let score = 0;
  let frame = 0;
  let flag = false;

  for (let index = 0; index < frameArray.length; index += 1) {
    const element = frameArray[index];
    const prev = frameArray[index - 1];

    if (frame === 10) {
      if (prev === 10 && element === undefined) return 'Invalid Input';
      if (frameArray[index + 3] !== undefined) return 'Invalid Input';
      if (frameArray[index + 1] === undefined) return score;
      if (prev === 10) return score;
      return 'Invalid Input';
    }

    if (element === 10) {
      frame += 1;
      if (frameArray[index + 1] === undefined || frameArray[index + 2] === undefined) return 'Invalid Input';
      score += element + frameArray[index + 1] + frameArray[index + 2];
    } else if (element + prev === 10 && flag) {
      frame += 1;
      flag = false;
      score += element + frameArray[index + 1];
    } else {
      if (flag) {
        if (prev + element > 10) return 'Invalid Roll';
        frame += 1;
      }
      flag = !flag;
      score += element;
    }
  }
  if (frame < 10) return 'Invalid Input';
  return score;
}

module.exports = bowling;

