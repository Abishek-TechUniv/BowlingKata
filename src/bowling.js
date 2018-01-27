class Bowling {
  constructor(rollArray) {
    this.rollArray = rollArray;
    this.flag = false;
  }

  isSpare(roll) { return (this.rollArray[roll] + this.rollArray[roll + 1] === 10); }

  isStrike(roll) { return (this.rollArray[roll] === 10); }

  strikeScore(roll) {
    const result = this.rollArray[roll + 1] + this.rollArray[roll + 2];
    if (Number.isNaN(result)) this.flag = true; // fill ball unused
    return result;
  }

  spareScore(roll) { return this.rollArray[roll + 2]; }

  normalScore(roll) {
    const result = this.rollArray[roll] + this.rollArray[roll + 1];
    if (result > 10) this.flag = true; // impossible scenario
    return result;
  }

  verify(result, roll) {
    const { length } = this.rollArray;
    // 2 fill balls only when last frame is a strike
    if (length === roll + 2 && this.rollArray[roll - 1] !== 10) this.flag = true;
    if (Number.isNaN(result)) this.flag = true; // less than 10 frames
    if (length <= 10 || length >= 22) this.flag = true; // number of rolls
    if (this.rollArray.some(value => value < 0)) this.flag = true; // negative values
  }

  get score() {
    let result = 0;
    let roll = 0;
    let frame = 0;
    while (frame < 10) {
      frame += 1;
      if (this.isStrike(roll)) {
        result += 10 + this.strikeScore(roll);
        roll += 1;
      } else if (this.isSpare(roll)) {
        result += 10 + this.spareScore(roll);
        roll += 2;
      } else {
        result += this.normalScore(roll);
        roll += 2;
      }
    }
    this.verify(result, roll);
    return this.flag ? 'Invalid Input' : result;
  }
}

module.exports = Bowling;
