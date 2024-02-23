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


















