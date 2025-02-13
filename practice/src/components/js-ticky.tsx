const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const key = "b";
  
  delete obj[key];
  
  console.log(obj); // { a: 1, c: 3 }

------------

const obj = {
    prop: 1,
    method() {
        return this.prop;
    }
};

const newObj = { prop: 2 };

console.log(obj.method.call(newObj)); // 2

------------

const a = [];
const b = [];

a[0] = b;
b[0] = a;

console.log(a[0][0]); // Error: Maximum call stack size exceeded

------------

console.log([] == []); // false
console.log([] === []); // false
console.log({} == {}); // false
console.log({} === {}); // false

------------

var a = 1;
function foo() {
  console.log(a);
  var a = 2;
}
foo(); // undefined


------------

console.log(typeof null); // object
console.log(typeof undefined); // undefined

------------
console.log(1 + '1'); // 11 // except + operator convert string to number
console.log('1' + 1); // 11 // except + operator convert string to number
console.log(1 - '1'); // 0 // -, /, and * this operation convert string to number
console.log('1' - 1); // 0 // -, /, and * this operation convert string to number

------------

var a = [1, 2, 3];
var b = a;
b[0] = 99;

console.log(a); // [ 99, 2, 3 ]
console.log(b); // [ 99, 2, 3 ]
// b does not create a new copy of the array. Instead, it copies the reference to the array a into b. So, both a and b now refer to the same array in memory.

------------ 
console.log([] + []); // ''
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object]
console.log([] == ![]); // true
//  {} is evaluated as an empty object, which is converted to the string "[object Object]".
------------

let x = 10;
let y = 20;

function foo() {
  console.log(x);
  let x = 30;
}

foo(); // ReferenceError: Cannot access 'x' before initialization

------------

const obj = {
    value: 10,
    increment() {
      this.value++;
    }
  };
  
  const newObj = obj;
  newObj.increment();
  
  console.log(obj.value);
// You create a new variable newObj and assign it the reference to obj. This means newObj and obj now refer to the same object in memory. So, any change to newObj will also affect obj because they point to the same underlying object.
  

------------
let a = 1;
let b = a;
a = 2;

console.log(b); // 1
// Note that this is not a reference assignment, since a is a primitive value (a number). So, b gets a copy of the value of a, which is 1. Now, b = 1 and a = 1.

------------
Qustion : difference between null and undefined 
  undefined
    - A variable that has been declared but not assigned a value is automatically assigned the value undefined.
    - undefined is its own type.

    let x;
    console.log(x); // undefined, because x is declared but not assigned

    function foo() {
    // no return statement
    }
    console.log(foo()); // undefined, because foo() doesn't return anything

    const obj = {};
    console.log(obj.nonExistentProperty); // undefined, because property doesn't exist

  null
    - null represents the intentional absence of any object value. It is explicitly assigned to variables to indicate that they should not have a value (or that they are "empty").
    - null is of type object (this is a known quirk in JavaScript).

    let x = null;
    console.log(x); // null, explicitly assigned

    let obj = { name: "John" };
    obj = null; // clear the reference to the object
    console.log(obj); // null, explicitly set to null


    example comparison
    let a;
    let b = null;

    console.log(a === undefined); // true, a is undefined
    console.log(b === null);      // true, b is null

    console.log(a == b);          // true, because undefined == null (loose equality)
    console.log(a === b);         // false, because undefined and null are of different types



------------

console.log(1 + '1'); // 11
console.log('1' + 1); // 11
console.log(1 + + '1'); // 2 
console.log(+'1' + 1); // 2
// + '1' becomes 1, and then you add 1 + 1, which gives 2.


------------

let x = 10;
let y = '10';

console.log(x == y); // true - number and string check value is same or not
console.log(x === y); // false


------------
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false

------------

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const first = outer();
const second = outer();

first();  // 1
first();  // 2
second(); // 1
first();  // 3

------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------


























