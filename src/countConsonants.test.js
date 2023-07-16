const countConsonants = require('./countConsonants');

describe('countConsonants', () => {
  it(" 'aeiouAEIOU' should return 0", () => {
    expect(countConsonants('aeiouAEIOU')).toBe(0);
  });

  it(" 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ' should return 42", () => {
    expect(countConsonants('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')).toBe(42);
  });
});
