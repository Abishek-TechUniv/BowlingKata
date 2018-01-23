const bowling = require('./bowling');

describe('The player\'s pins knocked in each frame is input as an array', () => {
  test('Every time no pin knocked down', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 0;
    expect(bowling(input)).toBe(output);
  });

  test('There are no strikes or spares', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 90;
    expect(bowling(input)).toBe(output);
  });
});

describe('The player has at least one strike in the match', () => {
  test('The first frame is a strike and the next is open', () => {
    const input = [10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 100;
    expect(bowling(input)).toBe(output);
  });

  test('The first frame is a strike and the next one is also a strike', () => {
    const input = [10, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 117;
    expect(bowling(input)).toBe(output);
  });
});

describe('The player has a special last frame', () => {

});
