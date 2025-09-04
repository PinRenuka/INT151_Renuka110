// Self-study 9/8/2025
// ตย.แต่ละอันส่วนใหญ่เอามาจากที่อ.สอน

//1. extract a string from a given string <s>
//   starting from character at position <i> and getting <n> characters.
s = 'this is a long string'; 
i = 5;
n = 4;

console.log(s.slice(i,i+n));
 
//2.1 get the position of the first occurrence of a given string <t> in a given string <s>.
s = "ghjkl;ghjkl"
t = "l"
s.indexOf(t)
console.log(s);

 
 
//2.2 get the position of the last occurrence of a given string <t> in a given string <s>.
s = "ghjkl;ghjkl"
t = "l"
s.lastIndexOf(t)
console.log(s);
 
 
//3. convert a given string <s> into another string so that all characters
//   from position <i> (inclusive) to position <j> (exclusive) of string <s>
//   become uppercase characters.
s = "hello my name is renuka"
i = 5
j = 8
s.slice(0,i) + s.slice(i,j).toUpperCase() + s.slice(j)
console.log(s);
 
//4. given an array <a>, remove all elements from position <i> (inclusive)
//   to position <j> (exclusive).
a = [1, 2, 3, 4, 5, 6];
i = 2;
j = 5;
a.splice(i, j)
console.log(a); 



//5. given an array <a>, insert elements: <x>,<y>, and <z> at position <i>
//   so that all elements from position <i> move away for 3 positions.
a = [10, 20, 30, 40];
i = 3;
a.splice(i, 0, "x", "y", "z"); 
console.log(a);  


dog = ["cat","dog","brid"]
dog.splice(1,1);
console.log(dog)



colors = ["red","black","pink"]
colors.splice(4,0,"puple")
console.log(colors)






