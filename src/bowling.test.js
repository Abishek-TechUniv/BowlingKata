const bowling = require('./bowling');

describe('The player\'s pins knocked in each frame is input as an array', () => {
  test('Every time no pin knocked down', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 0;
    expect(bowling(input)).toBe(output);
  });
});

