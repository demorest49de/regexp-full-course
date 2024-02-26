// function toCsvText(array) {
//   const mapped = array.flatMap((a, i, arr) => {
//     const joined = a.join(',');
//     console.log(' a: ', a);
//
//     return i !== array.length - 1 ? (joined.concat('\n')) : joined; // ili icshet pervi true
//   });
//   console.log(' mapped: ', mapped.join(''));
//   return mapped.join('');
// }
//
//
// toCsvText([[0, 1, 2, 3, 4],
//   [10, 11, 12, 13, 14],
//   [20, 21, 22, 23, 24],
//   [30, 31, 32, 33, 34]]);