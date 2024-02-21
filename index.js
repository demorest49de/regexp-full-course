
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

const regexp = /\d\d\s/
const str =
  'Привет, меня зовут Игорь! Мне 23 года.'

const res = str.match(regexp)
console.log(' результат: ', res[0]);



// . - любой символ кроме \n
// \d  - числа [0 - 9]
// \D - первый символ не число
// \s  - первый пробел