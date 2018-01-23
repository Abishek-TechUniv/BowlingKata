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

  test('Every frame except the last one is a strike', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 3];
    const output = 264;
    expect(bowling(input)).toBe(output);
  });
});

describe('The player has a special last frame', () => {
  test('Ever frame is a strike', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const output = 300;
    expect(bowling(input)).toBe(output);
  });

  test('The last frame is a strike, the fill frame is a spare', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 6, 4];
    const output = 101;
    expect(bowling(input)).toBe(output);
  });
});
