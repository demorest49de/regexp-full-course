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

const picsString = '2012.img20, 2011.img12, 2015.img15, 2011.img16, 2011.img11, 2016.img14, 2016.img12, 2010.img19, 2016.img19, 2012.img16, 2015.img10, 2010.img10, 2013.img6, 2010.img5, 2013.img19, 2013.img3, 2010.img15, 2010.img18, 2009.img5, 2015.img13, 2015.img5, 2016.img11, 2012.img10, 2014.img7, 2008.img17, 2012.img2, 2015.img7';
const pics = picsString.split(/,\s/);

// It should work for random inputs too: expected
// [ '2015.img15', '2016.img11', '2016.img12', '2016.img14', '2016.img19', '2016.img110' ]
// to deeply equal [ '2015.img15', '2016.img11', '2016.img12', '2016.img14', '2016.img19', '2016.img20' ]

function sortPhotos(pics) {
  const sorted = [...pics].sort();
  const match = sorted.join(', ').match(/\d{4}/g);
  const set = new Set(match);
  const years = [...set].sort();
  const flatedArray = years.flatMap(y => {
    const byYear = sorted.filter(x => x.includes(y)).sort((a, b) => {
      return a.match(/\d+$/)[0] - b.match(/\d+$/)[0];
    });
    return byYear;
  });
  const taken = flatedArray.slice(-5);
  const last = taken[taken.length - 1];
  const num = +(last.match(/\d+$/)[0]) + 1;
  const concated = last.replace(/\d+$/, '').concat(num);
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


















