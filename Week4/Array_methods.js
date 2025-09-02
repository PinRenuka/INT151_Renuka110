// 25/8/2025
// 110 อยากได้jellycat 
//filter function does not change an original array
const words = ["mango", "apple", "mangosteen", "orange"]
//1.annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6)
//2. annonymous function declaration
// const shortWords = words.filter(function (word) {
//   return word.length <= 6
// })
//3. reuse callback function (named function)
function wordLength(word) {
  return word.length <= 6
}
const shortWords = words.filter(wordLength)
console.log(words)
console.log(shortWords)
//sort function changes original array
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

const reWords = words.map((words) => words.toUpperCase()) 
console.log(reWords)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
const idStudents = students.map((students) => students.id).filter(id => id % 2 === 0) // ควรจะทำแบบนี้มากกว่า
const studentsid = students.filter((students) => students.id % 2 === 0).map(student => student.id); // แบบนี้ก็ได้แต่ถ้าได้โจทย์อีกลักษณะหนึ่งจะได้คำตอบอีกแบบ
console.log(idStudents)
console.log(studentsid)

//return all words that include 'mango' (ignore case)
//result ['Mango', 'mangosteen', 'mangoes']
//includes()->array
console.log(words.includes("Apple")) //true
console.log(words.includes("apple")) //false
console.log(words.includes("app")) //false

// //includes() ->string
const sentence = "The quick brown fox jumps over the lazy dog."
const word = "Ox"
console.log(sentence.includes(word))
 
const words = ["mango", "apple", "mangosteen", "orange","mangoes"]
const findpoanramai = words.filter(word => word.toLowerCase().includes("mango"));
console.log(findpoanramai)
// 110 อยากได้jellycat 
const words = ["mango", "apple", "mangosteen", "orange","mangoes"]
const findpoanramai = words.find(word => word.toLowerCase() === "apple");
if (findpoanramai) {
  console.log("มี apple");
} else {
  console.log("ไม่มี apple");
}

const product = [1, 'RED', 102];
const productDetail = product.reduce((detail, prop) => {
  return prop === 'RED' ? detail.concat('R') : detail.concat(prop);
}, ' ');

console.log(productDetail);


const cart = [
    {productId: 1001, price: 500, quantity: 2 },
    {productId: 1002, price: 10, quantity: 3},
    {productId: 1003, price: 5, quantity: 10}
]
 
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log({total})


const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(2,1,"banana")
console.log(words1)
words1.splice(3,2)
console.log(words1)
words1.splice(2,0,"melon","cherry")
console.log(words1)


const words4 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
console.log(words4.slice(2));
console.log(words4.slice(0,3));
console.log(words4.fill(null));

// Self-study 31/8/2568

const forEach = [1, 2, 3, 4]
forEach.forEach(forEach => console.log(forEach * 2))

const every = [2, 4, 6]
console.log(every.every(n => n % 2 === 0))

const some = [1, 3, 5, 6]
console.log(some.some(n => n % 2 === 0))

const findIndex = [10, 20, 30]
console.log(findIndex.findIndex(n => n > 15))

const arr = ["a", "b", "a", "c"]
console.log(arr.indexOf("a"))
console.log(arr.lastIndexOf("a")) 

const join = ["apple", "banana", "cherry"]
console.log(join.join(", "))

const arr1 = [1, 2]
const arr2 = [3, 4]
console.log(arr1.concat(arr2))

const arrr = [1, 2, 3]
console.log(arr.reverse())

