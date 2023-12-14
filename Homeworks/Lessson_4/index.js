// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

console.log([1, 2, 3] + ' is the answer.'); // ?
console.log(false || true * 2); // ?
console.log({ valueOf: () => 42 } * 2); // ?
console.log(parseInt('7.5') + parseFloat('2.5')); // ?
console.log(!!'Hello' - 1); // ?
console.log(new String('hello') instanceof Object); // ?
console.log((true ^ false) === (false ^ true)); // ?
console.log(true && '5' + 5); // ?
console.log({ valueOf: () => '10', toString: () => '20' } + 5); // ?
console.log((5).toString() === '5'); // ?
console.log(null || false || undefined); // ?
console.log(0 || 2 || NaN); // ?
console.log(1 && null && 2); // ?

//

function xy() {}

console.log(typeof xy); //?
console.log(xy instanceof Object); //?

var str1 = String(123);
var str2 = new String(123);

console.log(typeof str1 === typeof str2); //?
console.log(str1 === str2); //?
console.log(str1 === String(123)); //?
console.log(str2 === new String(123)); //?
console.log(str1 === 123); //?
console.log(str1 === '123'); //?
console.log(str1 == str2); //?
console.log(str1 == 123); //?
console.log(str1 == '123'); //?

var arr = [];
console.log(typeof arr); //?

var str3 = '123';
str3[0] = '2';
console.log(str3); //?

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); // ?
console.log(z, typeof z); // ?

var o = '123x';
console.log(Number(o)); // ?
console.log(parseInt(o, 10)); //
console.log(+o); //
console.log(typeof +o); // ?
console.log(Boolean(String(false))); //?

var h = [];
console.log(h ? 1 : 2); // ?

// Переменные

let a = a + 1;
console.log(a); // ?

//

var b = b + 1;
console.log(b); // ?

//

function foo(c) {
  if (c > 0) {
    var c = c + 10;
    return c;
  }
  return c;
}
console.log(foo(15)); // ?

//

function foo() {
  console.log(d2);
  let d1 = '1';
  return function () {
    console.log(d1);
    console.log(d2);
  };
}

const d2 = '2';
const x = foo();

x();

//

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}

console.log(giveMeX(false)); // ?
console.log(giveMeX(true)); // ?

//

console.log(x); // ?

var y = 1;

console.log(y); // ?

function car() {
  if (false) {
    var y = 2;
  }
  console.log(y);
}

car(); // ?
console.log(y); // ?

//

var i = 1;
var j = {};

(function () {
  i++;
  j.j = 1;
})();
console.log(i, j); // ?

(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); // ?

//

// Бонус

// Создать объект всеми возможными способами

const obj1 = {};
// const obj2 =  ваш код
// и тд

//

// Написать функцию глубокого сравнения двух объектов:
// объекты могут быть любыми, и иметь любой уровень вложенности

const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
  //  ваш код
};

//

console.log(deepEqual(obj1, obj2)); // true;
