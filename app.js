/*  function foo() {
  console.log('Hello, world!');
}

foo();

foo.field = 'Denis';

console.log(foo.field);  */

 /*  const arr = ['Denis', 'Ivan', 'Maks', 'Olga']; // =>[5, 4, 4, 4];

let newArr = [];

for (let i = 0; i < arr.length; i++ ) {

  newArr.push(arr[i].length);
}

console.log(newArr);
 
let newArr2 = []; */



/* for( i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
  }

  console.log(newArr2);  */ 

/*  const names = [ 'Denis', 'Ivan', 'Maks', 'Olga' ];


  function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i]));
    }
return res;

  }

  function nameLength(el) {
    console.log(el);
    return el.length;
  }

function nameToUpperCase(el) {
  return el.toUpperCase();
}

 const result = mapArray(names, nameLength);

 const result2 = mapArray(names, nameToUpperCase);

 console.log(result);

 console.log(result2);  */

 /*  function greeting(firstName) {
   return function(lastName) {
     return `Hello, ${firstName} ${lastName}`;
   };
 }
 
   const testGreeting = greeting('Denis');


const fullName = testGreeting('Mescheryakov');
console.log(fullName)  */

/* function question(job) {
if (job === 'developer') {
  return function(name) {
    return `${name}, что такое Js?`;
  } 
}else if (job === 'teacher') {
  return function(name) {
    return `${name}, какой предмет ы ведете? `;
  }
}
}

const developerQuestion = question('developer');

console.log(developerQuestion('Denis'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis')); */
/* 
let square = function(x) {
  return x * x;
}

square(5); 

const foo =square;

console.log(foo(6)) */
/* 


let arr1 = [1, 2, 3];
let arr2 = [];

for(let i = 0; i <arr1.length; i++) {
arr2.push(arr1[i] * 2);
}
console.log(arr2); */

/* let arr1 = [1, 2, 3];

let arr2 = arr1.map(function(item) {
  return item * 2;
});

console.log(arr2); */

/* const birtYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];

for (let i = 0; i < birtYear.length; i++) {
let age = 2021 - birtYear[i];
ages.push(age);  */
//}

//console.log(ages);

/* Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки: */

//firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
//firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
//firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
//“New value: Jhon is 45, Aaron is 20,”
//firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
 
 
//Подсказка: secondFunc должна быть представлена функцией, которая принимает 
//один аргумент (каждый элемент массива) и возвращает результат его обработки
/* 
function changeString(arr, getNewString) {
 
    let newString = 'New value:';
 
    for (let i = 0; i < arr.length; i++) {
        newString += getNewString(arr[i]);
    }
 
    return console.log(newString);
}
 
function stickCamelCaseString(item) {
 
    return ' ' + item[0].toUpperCase() + item.slice(1);
}
changeString(['my', 'name', 'is', 'Trinity'], stickCamelCaseString);

function increaseTen(item) {
  return ' ' + (item *= 10) + ',';
  }
changeString([10, 20, 30], increaseTen);

function objectToString(item) {
  return ' ' + item.name + ' ' + 'is' + ' ' + item.age + ',';
}
changeString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], objectToString );

function invertString(item) {
  let newItem = ' '; 
  for (let i = item.length - 1; i >= 0; i--) {
    newItem += item[i];
  }
  return ' ' + newItem + ',';
}
changeString(['abc', '123'], invertString);

 */

function helloLoop(n) {

for(let i = 0; i < n; i++) {
console.log('hello loop');
//console.log('hello loop');
}
}
helloLoop(9);