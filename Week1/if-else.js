// Self-study 9/8/2025
// ตย.แต่ละอันส่วนใหญ่เอามาจากที่อ.สอน

// 1. check type of variable x
//    with the least numbers of conditional checking.
 
var x = 'a'; // may be changed to something else.
 
// use nested conditional statements to check and print the type of variable x as
// string, integer, decimal, +/-Infinity, NaN, array, undefined, null, or object

switch (true) {
    case Array.isArray(x):
        console.log('Array');
        break;
    case typeof x === "string":
        console.log('String')
        break;
    case typeof x === "undefined":
        console.log('Undefined');
        break;
    case typeof x === "object":
        console.log('Object');
        break;
    case x === null:
        console.log('Null');
        break;
    case Number.isNaN(x):
        console.log('NaN');
        break;
    case !Number.isFinite(x):
        console.log('+/-Infinity');
        break;
    case Number.isInteger(x):
        console.log('Integer');
        break;
    case typeof x === "number":
        console.log('Decimal')
        break;
    default:
        console.log('Unknown');
        break;
}

//////////////////////////////////////////
// 2. return the grade based on the score
//    with the least numbers of conditional checking.
 
var score = 56.45; // may be changed to something else.
 
// print 'A' if 80 <= score <= 100
// print 'B' if 70 <= score < 80
// print 'C' if 60 <= score < 70
// print 'D' if 50 <= score < 60
// print 'F' if 0  <= socre < 50
// print 'ERROR' if score > 100, or score < 0, or score is not a number.

if (typeof score !== "number" || score > 100 || score < 0 || Number.isNaN(score)) {
  console.log('ERROR');
} else if (score >= 80) {
  console.log('A');
} else if (score >= 70) {
  console.log('B');
} else if (score >= 60) {
  console.log('C');
} else if (score >= 50) {
  console.log('D');
} else {
  console.log('F');
};
