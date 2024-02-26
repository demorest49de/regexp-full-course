// 1 отличие i++ & ++i

// let i = 1;
//
// console.log(' i = 1: ', i);
// console.log(' i++: ', i++);
// console.log(' i: i = 2', i);
// console.log(' ++i: ', ++i);
//
// for (let i = 1; i < 3; i++) {
//   console.log(i);
// }
//
// // посмотреть отличие i++ ++i
// for (let i = 1; i < 3; ++i) {
//   console.log(i);
// }



// let x = 0
//
// function count() {
//     let y = 0
//     const getX = () => console.log(x)
//
//     const getY = () => console.log(y)
//     return {
//         inc() {
//             x += 1;
//             y += 1;
//         }, getX, getY
//     }
// }
//
// count().inc()
// count().inc()
// count().getX()
// count().getY()

// var a = 0
//
// const x = ()=> {
//     console.log(this.a)
// }

// для стрел функц
//  отрабатывает всегда первый байнд
// x.bind(1).bind(2).bind(3)()
// x()
//
// function y() {
//     console.log(this.a)
// }
//
// y.bind(1).bind(2).bind(3)()
// y()

// class A {
//     a = 1
//
//     x() {
//         console.log(this.a)
//     }
//
//     y = () => {
//         console.log(this.a)
//     }
// }
//
// const a = new A()
// a.x()
// a.y()
//
// const obj = {
//     a: 1,
//     x() {
//         console.log(this.a)
//     },
//     y: () => {
//         console.log(this.a)
//     }
// }
//
// obj.x()
// obj.y()

// контекст стрел ф опр в мом опр-ния
// контекст не стрел ф опр в мом ее вызова

// если  у нас есть объек вложен в друг функцию,  стрел функция получит ее контекст
// контекст вызова гуглить


// try {
//   if (console.log(1)) {
//     console.log(2);
//   } else {
//     throw new Error();
//   }
// } catch {
//   console.log(console.log(3));
// }
//


// console.log(' : ', a);
// var a = 1;
//

// function v() {
//   a = 1;
//   const aa = 1;
//   let aaa = 1;
// }


// let p = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });
// p.then(result => console.log(result));
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// setTimeout(() => {
//   console.log(4);
// }, 500);

// function isInt (x) {
//   return Number.isInteger(x);
// }
//
// console.log(' isInt: ', isInt(2));

// function p(str) {
//
//    return str.split('').reverse().join("") === str
// }
//
// console.log(' p(шалаш) ', p('шалаш'))
//
// x.split('').reverse().join("") == x;

// let x = []
// Array.prototype.hello = console.log('hello')
// console.log(x,'hello')
// console.log(x.hello)


//задача про 8 шаров и 9 шаров
