// Self-study 9/8/2025
// ตย.แต่ละอันส่วนใหญ่เอามาจากที่อ.สอน

// String
// var s = "hello"; // primitiver string 
// var w = s;
// var t = new String("Hello"); //string object
// var r = new String("Hello"); //string object
// var u = 'hello';
// var m = `hello`;

// s = 'hi';

// console.log(s);
// console.log(w);
// console.log(t);
// console.log(r);
// console.log(u);
// console.log(s === t);
// console.log(s === u);
// console.log(u === m);
// console.log(s == t);
// console.log(s == u);
// console.log(u == m);

// s.concat(t) หมายถุงเอาstring มาต่อกัน
// s+t
let s = "hello"
let m = "WORLD"
console.log(s + m);
console.log(s.concat(m));

// s.toUpperCase() ตัวใหญ่
// s.toLowerCase() ตัวเล็ก
console.log(s.toUpperCase());
console.log(m.toLowerCase());

// s[i]
// s.charAt(i)
// s.at(i)
var l = 'fghjkl'
console.log('index: ',l[2]);
console.log('index: ',l[6]);
console.log('char: ',l.charAt(2));
console.log('char: ',l.charAt(6));
console.log('at: ',l.at(2));
console.log('at: ',l.at(-2));

// s.subastring(i,j)
// s.slice(i,j)
console.log('substring: ',l.substring(2))
console.log('substring: ',l.substring(4,2))
console.log('slice: ',l.slice(2))
console.log('slice: ',l.slice(4,2))

// s.startsWith(m)
// s.endsWith(m)
// s.includes(m)
console.log(l.startsWith('fgh'));
console.log(l.startsWith('tyu'));
console.log(l.endsWith('lkj'));
console.log(l.endsWith('wer'));
console.log(l.includes('hj'));
console.log(l.includes('dfg'));

// l.indexOf()
// o.lastIndexOf()
console.log(l.indexOf('hj'));
console.log(l.indexOf('io'));
var o = 'Mississippi'
console.log(o.lastIndexOf('iss'));

s = "  Hello World!  ";
// s.trim()
// s.trimStart()
// s.trimEnd()
console.log(s.trim()); 
console.log(s.trimStart());  
console.log(s.trimEnd());  

// s.replace(...)
let text = "I like apples and apples.";
console.log(text.replace("apples", "oranges"));  

// array.join(delim)
let arr = ["JavaScript", "is", "fun"];
console.log(arr.join(" "));  
console.log(arr.join("-")); 

// s.split(delim)
console.log(s.split(" "))

fun = "js is fun"
console.log(fun.toUpperCase())

let str = "banana"
console.log(str.indexOf("na"))
console.log(str.slice(1,4))

// -----------------------------------------------------------------------------------------------------------------------------------

