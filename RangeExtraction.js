/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either
 *  - individual integers
 *  - or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
 *    The range includes all integers in the interval including both endpoints.
 *    It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17".
 * @param {Array} list
 * @returns {String} A correctly formatted string in the range format
 */
function solution(list) {
  let res = [];
  for(let i = 0; i < list.length; i++) {
    let k = 1;
    let current = list[i];
    for(let j = 1; j <= list.length; j++) {
      if(current + j !== list[i + j]) {
        if(k >= 3) {
          res.push(`${current}-${list[i + j - 1]}`);
          i += j - 1;
          break;
        }
        res.push(current);
        break;
      }
      k++;
    }
  }

  return res.toString();
}