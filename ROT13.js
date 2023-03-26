/**
 * This function takes a string and returns a new string in ROT13 format.
 * the function does not take into account spaces, punctuation and numbers
 * @param {String}
 * @returns {String}
 */

function rot13(str) {
  const strUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const strLower = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let res = str.split('').map(e => {
    if (strUpper.indexOf(e) >= 0) {
      const index = strUpper.indexOf(e);
      return index >= strUpper.length / 2 ? strUpper[index - 13] : strUpper[index + 13];
    }

    if (strLower.indexOf(e) >= 0) {
      const index = strLower.indexOf(e);
      return index >= strLower.length / 2 ? strLower[index - 13] : strLower[index + 13];
    }

    return e;
  });

  return res.join('');
}
