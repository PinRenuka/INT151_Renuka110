// in class 14/8/2025
// 1.object literal
hi = {
    name:"mena",
    lastname:"nus",
    lastname:"pin",
    fullname: function(){
        return this.name + " " + this.lastname;
    }
};
console.log(hi.fullname());


const k = {
    id : 111, 
    name : "ppp",
    class :[ {Sunday:"INT110",Monday:"INT191"} ],
    Number : [11,12,13,14],
    getk(){
        return this.id 
    }
};
console.log(k.getk())


// const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}

const book={isbn:12345678, isbn:88888888, title:'Introduction to JS',
authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], 
versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
// console.log(book)
// console.log(book.getISBN())
// console.log(book.authors) //array
// console.log(Object.values(book.authors))

//new Date(year, monthIndex, day)
book.publishDate=new Date(2025, 1, 1)
// console.log(book)
delete book.isAvailable
// console.log(book)
console.log(book["publishDate"])
console.log(book.publishDate)

for (const key in book) {
//    console.log(book.key) //not allowed
console.log(book[key])
}

// 2.constructor function
function Book(isbn,title) {
    this.isbn = isbn
    this.title = title
}
const b1 = new Book(111,"my")
const b2 = new Book(222,"little")
console.log(b1)
console.log(b2)

//3.class
class Booky{
    constructor(isbn, title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title=title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}
const myBook=new Booky(12345678, 'JS Beginner')
console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())
// console.log(myBook.setTitle('JS for Beginner'))
// console.log(myBook.getBookInfo())

//4. using Object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)


let k1 = {id:11,name:"pin"}
const k2 = {id:11,name:"pin"}
console.log(k1 === k2)
console.log(Object.is(k1,k2))
k1=k2
console.log(k1 === k2)
console.log(Object.is(k1,k2))


const b6={isbn:123, title:"JS"}
const b7={isbn:123, title:"JS"}
function isBook(object1,object2) {
    return object1.isbn === object2.isbn ? true:false
}
console.log(isBook(b6,b7))

const keys=Object.keys(b6) //array of keys //[ 'isbn', 'title' ]
const values=Object.values(b7) //array of values//[ 123, 'JS' ]
console.log(keys)
console.log(values)

//destructuring on array
const colors=['red', 'green', 'blue']
const [, item2]=colors //const items=colors[1]
console.log(item2)
//destructuring on object
const b8={isbn: 1234, title: 'JS', authors:{firstname: 'Jon',lastname:'Smith'}}

const {isbn,title}=b8
console.log(isbn)//1234
console.log(title)//JS
const {isbn:Number}=b8
console.log(Number)//1234
const {authors:{firstname}}=b8
console.log(firstname)

// Self-study 17/8/2568
// ทวน Object.keys() & Object.values() &  Object.entries()

// Object.keys() คืนค่าเป็น array ของชื่อ key (property names) ของ object
const book = { isbn: 123, title: "JS", author: "John" }
console.log(Object.keys(book)) // [ 'isbn', 'title', 'author' ]

// Object.values(obj) คืนค่าเป็น array ของ value (ค่าของ property) ของ object
console.log(Object.values(book)) // [ 123, 'JS', 'John' ]

// loop 
const user = { id: 1, name: "Mena", role: "student" }
// forEach แสดง key กับ value
Object.keys(user).forEach(key => {
  console.log(key, ":", user[key])
})

// Object.entries(obj) จะคืนค่าเป็น array ของ [key, value]
console.log(Object.entries(user)) // [ [ 'id', 1 ], [ 'name', 'Mena' ], [ 'role', 'student' ] ]

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`)
}

// 