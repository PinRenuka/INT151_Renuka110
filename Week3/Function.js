// in class 19/8/2025
// 110 อยากได้jellycat 
function Sum(i,x) {
    return i * x ;
}
console.log(Sum(5,6))

//1. function declaration
function multiply(a,b) {
    return a*b;
}
console.log(multiply(4,2))

//2. function expression(using arrow function syntax)
const multiply2 = (a,b)=>{ return a*b} // ถ้าไม่ใส่ {} ก็เขียนแค่ (a,b)=>a*b
console.log(multiply2(1,2))

//3. function expression(using function declaration)
const multiply3 = function(a,b){ return a*b}
console.log(multiply3(2,2))

console.log(typeof multiply)
console.log(typeof multiply2)
console.log(typeof multiply3)

const x = multiply
console.log(x(2,4))
console.log(typeof x)
console.log(x)

let a = 1;
let b = a ;
console.log(typeof b)


function dosomething(x) {
    // return x(3,5)
    return x
}
console.log(dosomething(Sum))
const y = dosomething(multiply)
console.log(y)


function sayGoodbye() {
    return 'Good bye'
}
function dosomething() {
    return sayGoodbye
}
let doIt = dosomething()
console.log(doIt())
console.log(dosomething()())


function myFunc(theObject) {
    theObject.model = "A9999"
}
const product = {model:"A1001",price: 199}
console.log(product.model)

myFunc(product);
console.log(product.model)

function square(side) {
    return side=9
}
let theside = 2
console.log(square(theside));
console.log(theside);

function Sumy(i,x, ...Z) {
    // return i * x ;
    for (argu of arguments) {
        console.log(argu)
    }
    console.log("length : " + arguments.length)
    console.log("x : "+ i)
    console.log("x : "+ x)
    console.log("x : "+ Z)
}
Sumy(1,2,3,4,5,6,7,8)

// 110 อยากได้jellycat 
function Sum(...argu) {
    let total = 0
    for ( i of argu) {
        total += i
    }
    return total
}
console.log(Sum());
console.log(Sum(1,2,3,4))

function greeting(greet = 'hello',whom = 'Guest', quote = 'How are you?') {
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting("good morning","guy","Great!"))
console.log(greeting(undefined,null,"fine"))
console.log(greeting())


function sum(n1,n2,n3) {
    return n1+n2+n3
}
let num = [1,2,1]
console.log(sum(...num))
console.log(sum(3,3,4,5))
console.log(sum(5))

function arrayAdd1([x1], [y1]) {
return x1+y1
}
const a = [5, 8]
const b = [2, 7]
console.log(arrayAdd1(a, b))

function arrayAdd2([x1, y1], [x2, y2]) {
return x1 + x2 + y1 + y2
}
console.log(arrayAdd2([1, 2], [3, 4]))

function arrayAdd3([x1, y1], [x2, y2]) {
return [x1 + x2, y1 + y2]
}
const x = [1, 2]
const y = [3, 4]
console.log(arrayAdd3(x, y))

// Self-study 24/8/2568
/*ให้เขียน function ที่แสดงผลลัพธ์ดังภาพ ตาม size ที่รับเข้ามาได้ 
(ความกว้าง ความยาว มีค่าเท่ากัน ดังในตัวอย่างนี้ size = 9) */
function draw(size) {
  const odd = size % 2;
  const maxIndex = size - odd;
  const midIndex = maxIndex / 2;

  for (let y = 0; y < size; y++) {
    let line = '';
    for (let x = 0; x < size; x++) {
      if (
        y == midIndex                       // mid-horizontal line
        || x == midIndex                    // mid-vertical line
        || (x + y) % maxIndex == midIndex   // Q1,Q4 diagonal line
        || Math.abs(x - y) == midIndex      // Q2,Q3 diagonal line
      ) {
        line += '0';
      } else {
        line += '_';
      }
    }
    console.log(line);
  }
}

console.log(draw(9))