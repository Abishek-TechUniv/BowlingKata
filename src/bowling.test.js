const bowling = require('./bowling');

describe('The player\'s pins knocked in each frame is input as an array', () => {
  test('Every time no pin knocked down', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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

describe('The player has one or more spares', () => {
  test('The first frame is a spare and the next is open', () => {
    const input = [5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 97;
    expect(bowling(input)).toBe(output);
  });

  describe('Every frame is a spare and the special ball', () => {
    test('is a strike', () => {
      const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10];
      const output = 155;
      expect(bowling(input)).toBe(output);
    });

    test('is not a strike', () => {
      const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      const output = 150;
      expect(bowling(input)).toBe(output);
    });
  });


  test('Every frame except the last one is a spare', () => {
    const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 3];
    const output = 145;
    expect(bowling(input)).toBe(output);
  });
});

describe('The player has a mix of spares and strikes', () => {
  test('Strike follwed by a spare', () => {
    const input = [6, 3, 10, 5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 108;
    expect(bowling(input)).toBe(output);
  });

  test('spare followed by a strike', () => {
    const input = [5, 5, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 111;
    expect(bowling(input)).toBe(output);
  });

  test('two spares and a strike', () => {
    const input = [5, 5, 5, 5, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 117;
    expect(bowling(input)).toBe(output);
  });

  test('two strikes and a spare', () => {
    const input = [10, 10, 5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 124;
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

describe('Invalid inputs should return an error string', () => {
  test('less than 10 throws', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10];
    const output = 'Invalid Input';
    expect(bowling(input)).toBe(output);
  });

  test('more than than 21 throws', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 5, 5, 3];
    const output = 'Invalid Input';
    expect(bowling(input)).toBe(output);
  });

  test('frames more than 10', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 6, 3, 6, 3, 7, 2];
    const output = 'Invalid Input';
    expect(bowling(input)).toBe(output);
  });

  test('frames less than 10', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 'Invalid Input';
    expect(bowling(input)).toBe(output);
  });

  describe('Last frame should get extra balls', () => {
    test('one extra ball', () => {
      const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 5, 5, 10, 1];
      const output = 'Invalid Input';
      expect(bowling(input)).toBe(output);
    });

    test('two extra balls', () => {
      const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10, 10, 5];
      const output = 'Invalid Input';
      expect(bowling(input)).toBe(output);
    });
  });
});

