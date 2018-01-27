const Bowling = require('./bowling');

describe('The player\'s pins knocked in each frame is input as an array', () => {
  it('Every time no pin knocked down', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 0;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
  it('There are no strikes or spares', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 90;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});

describe('The player has at least one strike in the match', () => {
  it('The first frame is a strike and the next is open', () => {
    const input = [10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 100;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('The first frame is a strike and the next one is also a strike', () => {
    const input = [10, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 117;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('Every frame except the last one is a strike', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 3];
    const output = 264;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});

describe('The player has a mix of spares and strikes', () => {
  it('Strike follwed by a spare', () => {
    const input = [6, 3, 10, 5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 108;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('spare followed by a strike', () => {
    const input = [5, 5, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 111;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('two spares and a strike', () => {
    const input = [5, 5, 5, 5, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 117;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('two strikes and a spare', () => {
    const input = [10, 10, 5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 124;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});


describe('The player has one or more spares', () => {
  it('The first frame is a spare and the next is open', () => {
    const input = [5, 5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 97;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  describe('Every frame is a spare and the special ball', () => {
    it('is a strike', () => {
      const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10];
      const output = 155;
      const frame = new Bowling(input);
      expect(frame.score).toBe(output);
    });

    it('is not a strike', () => {
      const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      const output = 150;
      const frame = new Bowling(input);
      expect(frame.score).toBe(output);
    });
  });


  it('Every frame except the last one is a spare', () => {
    const input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 3];
    const output = 145;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});

describe('The player has a special last frame', () => {
  it('Ever frame is a strike', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const output = 300;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('The last frame is a strike, the fill frame is a spare', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 6, 4];
    const output = 101;
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});

describe('Invalid inputs should return an error string', () => {
  it('less than 10 throws', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('more than than 21 throws', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 5, 5, 3];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('frames more than 10', () => {
    const input = [10, 10, 10, 10, 10, 10, 10, 10, 6, 3, 6, 3, 7, 2];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('frames less than 10', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  describe('Last frame should get extra balls', () => {
    it('one extra ball', () => {
      const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 5, 5, 10, 1];
      const output = 'Invalid Input';
      const frame = new Bowling(input);
      expect(frame.score).toBe(output);
    });

    it('two extra balls', () => {
      const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10, 10, 5];
      const output = 'Invalid Input';
      const frame = new Bowling(input);
      expect(frame.score).toBe(output);
    });
  });
  it('If last roll not taken', () => {
    const input = [6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});

describe('The pins should be correctly striken down', () => {
  it('scoring in negatives should throw error', () => {
    const input = [6, -5, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10, 10];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });

  it('scoring more than 10 on a frame', () => {
    const input = [6, 8, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10, 10];
    const output = 'Invalid Input';
    const frame = new Bowling(input);
    expect(frame.score).toBe(output);
  });
});
