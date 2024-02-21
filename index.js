
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

const regexp = /[ЮИ]ра/
const str =
  // 'Привет, меня зовут Igor! ТЕбе 20? Мне 23 года.'
  'Это Юра и Ира сказали Ура!'

const res = str.match(regexp)
console.log(' результат: ', res[0]);



// . - любой символ кроме \n
// \d  - числа [0 - 9]
// \D - первый символ не число
// \s  -  пробел [ \t, ,\n ]
// \S - не пробельный символ
// \w - [a-zA-Z0-9]
// \W -  не слово
// /[abc]/ - набор
// /[^abc]ра/ - исключающий набор
