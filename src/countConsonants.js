function countConsonants(str = '') {

  if (typeof str !== 'string') throw new Error('Invalid argument');
  return str.replace(/[^a-z]/gi, '').replace(/[aeiou]/gi, '').length;
}

module.exports = countConsonants;
