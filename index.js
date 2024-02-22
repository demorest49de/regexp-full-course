// regexp - это поиск последовательности в строке а также замена и проверка на совпадение

// const regexp = /Igor/
// const regexp = /Igor./

// const regexp = /Igor\./
//
// const str =
//     'Privet, menia zovut Igor! Mne 23 goda.'

// const regexp = /\d\d/
// const str =
//     'Privet, menia zovut Igor! Mne 23 goda.'

// const regexp = /\d\d\s/
// const str =
//   'Привет, меня зовут Игорь! Мне 23 года.'

// const regexp = /\d\d\s/
// const regexp = /\d\d\S/

// const regexp = /\s\w\w\s/

// const str =
//   'Привет, меня зовут Игорь! ТЕбе 20? Мне 23 года.'
// 'Привет, меня зовут Igor! ТЕбе 20? Мне 23 года.'
// 'Это Юра и Ира сказали Ура!'

// const regexp = /[^а-д]/
// const str =
// 'Сегодня 23.02.2023'
// const res = str.match(regexp)
// console.log(' результат: ', res);


// const regexp = /\d*/;
// const str =  `0123456789`;

// const regexp = /\s*,\s*/;
// const str =  `0,1,   2,   3, 4, 5,   6,      7,  8,9`;
// const arr = str.split(regexp)
// console.log(' arr: ', arr);


// const regexp = /\d{6}/;
// const str =  `... 234567 ......`;
//
// const arr = str.search(regexp)
// console.log(' arr: ', arr);

// const regexp = /\d{7}/;
// const str =  `... 234567 ......`;
//
// const arr = str.search(regexp)
// console.log(' arr: ', arr);


// const regexp = /\s*,\s*/;
// const str =  `0 , 1,   2 , 3 ,     4 , 5 ,   6 ,      7 ,  8 , 9 `;

// const regexp = /(\[(\!?\w*\s*)+\])|(\!?\w+)/gi;
// const str =  ''

const picsString = '2013.img10, 2012.img18, 2008.img16, 2014.img18, 2014.img5, 2011.img20, 2016.img2, 2010.img1, 2016.img1, 2016.img6, 2010.img16, 2011.img18, 2014.img17, 2015.img19, 2015.img1, 2014.img15, 2012.img5, 2011.img9, 2009.img15, 2013.img19, 2011.img4, 2013.img1, 2009.img6, 2015.img11, 2014.img12, 2016.img17, 2008.img5, 2013.img20, 2016.img15, 2015.img2, 2008.img19, 2013.img7, 2012.img9, 2014.img7, 2010.img4, 2009.img16, 2015.img8';
const pics = picsString.split(/,\s/);
// console.log(' pics: ', pics.toSorted());

// [ '2016.img1', '2016.img2', '2016.img6', '2016.img15', '2016.img17', '2016.img18' ]
function sortPhotos(pics) {
  
  // const sorted = pics.sort((a, b) => {
  //   console.log(' a.match(/\d+/g).reduce((a, b) => (+a) + (+b)): ', a.match(/\d+/g).reduce((a, b) => (+a) + (+b)));
  //   console.log(' b.match(/\d+/g).reduce((a, b) => (+a) + (+b)): ', b.match(/\d+/g).reduce((a, b) => (+a) + (+b)));
  //   return a.match(/\d+/g).reduce((a, b) => (+a) + (+b)) - b.match(/\d+/g).reduce((a, b) => (+a) + (+b));
  // });
  
  const sorted = [...pics].sort();
  console.log(' sorted: ', sorted);
  console.log(' pics: ', pics);
  
  
  // const match = sorted.join(', ').match(/\d{4}/g)
  // const set = new Set(match)
  // const yearsSorted = [...set].sort();
  // console.log(' yearsSorted: ', yearsSorted);
  const taken = sorted.slice(-5);
  const last = taken[taken.length - 1];
  const num = +(last[last.length - 1]) + 1;
  const concated = last.replace(/.?$/, '').concat(num);
  return [...taken, concated];
};

console.log(' sortPhotos(): ', sortPhotos(pics));


// ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']
// const regexp = /\bpro\b/g;
// const str =
//   ('Hello Im Javascript\nprogrammer, I\'m so proud')

// const res = str.match(regexp);
// console.log(' результат: ', res);

// const arr = str.split(regexp)
// console.log(' arr: ', arr);

// . - любой символ кроме \n
// \d  - числа [0 - 9]
// \D - первый символ не число
// \s  -  пробел [ \t, ,\n ]
// \S - не пробельный символ
// \w - [a-zA-Z0-9]
// \W -  не слово
// /[abc]/ - набор
// /[^abc]ра/ - исключающий набор
// [a-z] - diapazon
// [^a-z] - diapazon

// Жадные квонтификаторы /\d{3,4}/ - возьмет 4
// Ленивые квонтификаторы /\d{3,4}/? - возьмет 3
// Тоже Ленивые квонтификаторы /\d{3,}/? - возьмет 3
// ? - {0, 1}
// * - {0, }
// + - {1, }

// *? - возьмет 0
// +?

//* или + ====> * - сработает даже если вхождений 0, а + обязательно должно быть вхождение
// флаги:

// g/i - global/ignore case.  Без знака глобал будет искать только первое вхождение. с ним будет искать все возможные
// вхождения

// s - учитываются все символы  в том числе и перенос строки
// () - cкобочная группа


















