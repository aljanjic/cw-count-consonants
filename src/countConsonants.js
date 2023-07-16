function countConsonants(str = '') {

  
  str = str.replace(/[aeiou]/gi, '')

  return str.length;
}

module.exports = countConsonants;
