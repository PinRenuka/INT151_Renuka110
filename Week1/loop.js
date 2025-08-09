// Self-study 9/8/2025
// ตย.แต่ละอันส่วนใหญ่เอามาจากที่อ.สอน

var n = 10 ;
var i = 1 ;
var sum = 0 ;
// สามารถประการตัวแปรอยู่ภายนอกได้
while (i < n) {
    sum += i ;
    console.log("while loop : ",i,sum);
    i++;    
}


var n2 = 10 ;
var i2 = 1 ;
var sum2 = 0 ;

for (;i2 < n2;) { // มี ;; หน้าหลังเพื่อให้ตรงกลางเป็นเงื่อนไข
    sum2 += i2 ;
    console.log("for loop : ",i2,sum2);
    i2++;
}

// Loop Exercise
// 1. write a script to print the factorial of 1 to n.
// print "ERROR" if n is not an integer or n is less than 0;
// print 0 1 if n is 0 (because 0! = 1)
// e.g.,
// 1 1
// 2 2
// 3 6
// 4 24
// ...
// n n!

var n = 6;
// loop to print i and i! until i==n
 if (!Number.isInteger(n) || n < 0) {
    console.log("ERROR")
 } else if (n === 0) {
    console.log("0 1")
 } else {
    let factorial = 1;
    for (let i = 1;i <= n;i++) {
        factorial *= i ;
        console.log(i,factorial)        
    }
 }
 

//  2. count (and print) the number of vowels (i.e., 'a', 'e', 'i', 'o', 'u'; 
// case-insensitive) in a string <s>. if <s> is not a string, print "ERROR".
// Use switch-case to get full credit.
var s = "Aroka";

if (typeof s !== "string") {
    console.log("ERROR");
} else {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        count++;
        break;
    }
  }
  console.log("มีสระ " + count + " ตัว");
}

// 3. check if n is a prime number.
// print YES if n is a prime number. Otherwise, print NO.
// the followings are not prime numbers:
// "string", "2", NaN, Infinity, -3, null, ...

// A prime number is a positive integer (> 1) 
// that is divisible only by 1 and itself.

var n = 101;

if (typeof n !== "number" || !Number.isInteger(n) || !Number.isFinite(n) || n <= 1) {
    console.log("NO");
} else {
    let Prime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            Prime = false;
        break;
        }
  }
  console.log(Prime ? "YES" : "NO");
}

