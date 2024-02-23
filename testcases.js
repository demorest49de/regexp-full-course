// It should work for random inputs too: expected
// [ '2015.img15', '2016.img11', '2016.img12', '2016.img14', '2016.img19', '2016.img110' ]
// to deeply equal [ '2015.img15', '2016.img11', '2016.img12', '2016.img14', '2016.img19', '2016.img20' ]

const picsString = '2012.img20, 2011.img12, 2015.img15, 2011.img16, 2011.img11, 2016.img14, 2016.img12, 2010.img19, 2016.img19, 2012.img16, 2015.img10, 2010.img10, 2013.img6, 2010.img5, 2013.img19, 2013.img3, 2010.img15, 2010.img18, 2009.img5, 2015.img13, 2015.img5, 2016.img11, 2012.img10, 2014.img7, 2008.img17, 2012.img2, 2015.img7';
const pics = picsString.split(/,\s/);

// function sortPhotos(pics) {
//   const sorted = [...pics].sort();
//   const match = sorted.join(', ').match(/\d{4}/g);
//   const set = new Set(match);
//   const years = [...set].sort();
//   const flatedArray = years.flatMap(y => {
//     const byYear = sorted.filter(x => x.includes(y)).sort((a, b) => {
//       return a.match(/\d+$/)[0] - b.match(/\d+$/)[0];
//     });
//     return byYear;
//   });
//   const taken = flatedArray.slice(-5);
//   const last = taken[taken.length - 1];
//   const num = +(last.match(/\d+$/)[0]) + 1;
//   const concated = last.replace(/\d+$/, '').concat(num);
//   return [...taken, concated];
// };


function sortPhotos(pics) {
  const reg = /(\d*)\.img(\d*)/;
  console.log(' pics: ', pics);
  
  function compare(a, b) {
    const regA = reg.exec(a);
    const regB = reg.exec(b);
    
    const year = parseInt(regA[1]) - parseInt(regB[1]);
    if (year == 0) {
      return parseInt(regA[2]) - parseInt(regB[2]);
    }
    return year;
  }
  
  console.log(' pics.sort(compare): ', pics.sort(compare));
  const sorted = pics.sort(compare).splice(-5);
  const last = sorted[sorted.length - 1];
  const elem = last.replace(reg, (match, p1, p2) => {
    console.log('match, p1, p2: ', match, p1, p2);
    return `${p1}.img${(parseInt(p2) + 1)}`;
  });
  sorted.push(elem);
  return sorted;
}

console.log(' sortPhotos(): ', sortPhotos(pics));









