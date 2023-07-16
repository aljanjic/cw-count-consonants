const countConsonants = require('./countConsonants');

describe('countConsonants', () => {
  it(" 'aeiouAEIOU' should return 0", () => {
    expect(countConsonants('aeiouAEIOU')).toBe(0);
  });

  it(" 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ' should return 42", () => {
    expect(countConsonants('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')).toBe(42);
  });

  it(" 'aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#' should return 42 ", () => {
    expect(countConsonants('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')).toBe(42);
  });

  it(" 1 should return Error ", () => {
    expect(()=> countConsonants(1)).toThrow();
  });
});
