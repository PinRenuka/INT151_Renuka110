// in class 8/5/2025
let d = ["h",true,3,undefined,5,9876n]

console.log(`first item : ${d[0]}`)
console.log(`lest item : ${d[d.length-1]}`)
console.log(`length : ${d.length}`)

for (let i = 0; i < d.length; i++) {
    console.log(`index${[i]} : ${d[i]}`)
}
//
d[6] = "hello"
console.log(d)
console.log(`length : ${d.length}`)
// growing
d[d.length]='som'
d[d.length+2]='JS'
console.log(d)
console.log(`length : ${d.length}`)
// shrinking
delete d[3]
console.log(d)
console.log(`length : ${d.length}`)
// use splice
d.splice(3,3)
console.log(d)
console.log(`length : ${d.length}`)
//
let b = ['hello',1,4,[,9,8,true],{name:"maruko"}]
console.log(b)

//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors[1])
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1])
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)
for (let i in groups) {
  console.log(`${groups[i][groups[i].length-1]}`);
}

// The ... spread and rest
const greeting ='hello world'
const hi = [...greeting]
console.log(hi)

const ki = ['bibi',...hi,'mimi']
console.log(ki)

//
let a = new Array()
console.log(a)
console.log(a.length)
let l = new Array(10)
console.log(l)
console.log(l.length)
let m = new Array(10,2,3,4,5,'hu')
console.log(m)
console.log(m.length)

//
let arr = Array.of(5)
console.log(arr)
console.log(arr.length)
let arr1 = Array.from(arr)
let arr2 = Array.from(m)
console.log(arr1)
console.log(arr2)