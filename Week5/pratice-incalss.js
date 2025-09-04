
const studentScores = [
    { name : 'Alice', score : 85},
    { name : 'Bob', score : 92},
    { name : 'Charlie', score : 68},
    { name : 'David', score : 55},
    { name : 'Eve', score : 78}
];

function getPassingName(student){
    return student.filter((student) => student.score >= 70).map(student => student.name.toUpperCase())
}

const passingNames = getPassingName(studentScores);
console.log(passingNames)

// ------------------------------------------------------------------------------------------------------------------------
//check array type
console.log(Array.isArray([]))
console.log(Array.isArray([1, true]))
console.log(Array.isArray("[]"))
//merge string
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
//convert to string
console.log(array3.toString())
 

const array14 = [1,30,4,21,100000]
console.log(array14.sort((a,b) => a - b))
console.log(array14.sort((a,b) => b - a))

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
 
stds.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  return nameA > nameB ? 1 : -1;
});
console.log(stds)

console.log(stds.sort((a, b) => a.name - b.name))

