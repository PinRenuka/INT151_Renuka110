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

