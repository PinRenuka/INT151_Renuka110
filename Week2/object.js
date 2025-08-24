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

/* ให้เขียนโปรแกรมภาษา JavaScript ตามโจทย์ต่อไปนี้
ข้อเดียว (แบ่งเป็นข้อย่อย)
สร้างคลาส Person
property: name, age
เมธอด:
getName() คืนค่า name ถ้าเป็น string
getAge() คืนค่า age ถ้าเป็นตัวเลข ≥ 0
สร้างคลาส Employee ที่สืบทอด (extends) จาก Person
property: position, salary
เมธอด:
getPosition() คืนค่าตำแหน่งงาน
getSalary() คืนค่าเงินเดือน
increaseSalary(amount) เพิ่มเงินเดือนตามจำนวนที่กำหนด (ต้องตรวจสอบว่า amount ≥ 0)
สร้างคลาส Manager ที่สืบทอดจาก Employee
มี property: team (เก็บลิสต์ลูกทีมซึ่งเป็น Employee)
เมธอด:
addTeamMember(emp) เพิ่มพนักงานเข้า team
getTeamSize() คืนค่าจำนวนสมาชิกในทีม
getTotalTeamSalary() คืนค่าผลรวมเงินเดือนของทุกคนในทีม
เขียนโปรแกรมทดสอบการทำงาน:
สร้าง Employee 2 คน:
Alice, อายุ 25, position = "Developer", salary = 30000
Bob, อายุ 28, position = "Tester", salary = 25000
สร้าง Manager 1 คน:
Charlie, อายุ 35, position = "Team Lead", salary = 50000
ให้ Manager เพิ่ม Alice และ Bob เข้าทีม
แสดงผล:
จำนวนคนในทีม
เงินเดือนรวมของทีม
ทดลองเพิ่มเงินเดือน Bob 5000 แล้วแสดงผลเงินเดือนใหม่ของ Bob และรวมของทีมอีกครั้ง */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        if (typeof this.name === "string") {
            return this.name;
        } else {
            return "Error: name must be a string";
        }
    }
    getAge() {
        if (typeof this.age === "number" && this.age >= 0) {
            return this.age;
        } else {
            return "Error: age must be a non-negative number";
        }
    }
}
class Employee extends Person {
    constructor(name, age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    getPosition() {
        return this.position;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary(amount) {
        if (typeof amount === "number" && amount >= 0) {
            this.salary += amount;
        } else {
            console.log("Error: amount must be non-negative number");
        }
    }
}
class Manager extends Employee {
    constructor(name, age, position, salary) {
        super(name, age, position, salary);
        this.team = [];
    }
    addTeamMember(emp) {
        this.team.push(emp);
    }
    getTeamSize() {
        return this.team.length;
    }
    getTotalTeamSalary() {
        return this.team.reduce((sum, emp) => sum + emp.getSalary(), 0);
    }
}

const emp1 = new Employee("Alice", 25, "Developer", 30000);
const emp2 = new Employee("Bob", 28, "Tester", 25000);
const manager = new Manager("Charlie", 35, "Team Lead", 50000);
manager.addTeamMember(emp1);
manager.addTeamMember(emp2);
console.log("Team size:", manager.getTeamSize());
console.log("Total team salary:", manager.getTotalTeamSalary());
emp2.increaseSalary(5000);
console.log("Bob new salary:", emp2.getSalary());
console.log("Total team salary (after raise):", manager.getTotalTeamSalary());


/* โจทย์
ให้เขียนโปรแกรมภาษา JavaScript โดยใช้ OOP และ การจัดการข้อผิดพลาด (Error Handling) ดังนี้
สร้างคลาส BankAccount
มี property: ownerName, balance
เมธอด:
deposit(amount) : เพิ่มเงินเข้าบัญชี ถ้า amount ≤ 0 ให้ throw new Error("Deposit must be positive")
withdraw(amount) : ถอนเงินจากบัญชี ถ้า amount ≤ 0 หรือมากกว่า balance ให้ throw new Error("Invalid withdrawal amount")
getBalance() : คืนค่า balance
สร้างคลาส SavingAccount ที่สืบทอด (extends) จาก BankAccount
มี property เพิ่ม: interestRate
เมธอด:
addInterest() : เพิ่มดอกเบี้ยเข้า balance ตามอัตราดอกเบี้ยที่กำหนด
เขียนโปรแกรมทดสอบการทำงาน โดยใช้ try { ... } catch(err) { ... }
สร้างบัญชี SavingAccount ของ "Alice" เงินเริ่มต้น 1000 บาท ดอกเบี้ย 5%
ฝากเงิน 500 บาท
ถอนเงิน 2000 บาท → ต้องเจอ Error และจับด้วย catch
ฝากเงิน -100 บาท → ต้องเจอ Error และจับด้วย catch
เรียก addInterest() แล้วแสดงยอดเงินสุดท้าย */

class BankAccount {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit must be positive");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid withdrawal amount");
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

class SavingAccount extends BankAccount {
    constructor(ownerName, balance, interestRate) {
        super(ownerName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance += this.balance * this.interestRate / 100;
    }
}

try {
    const alice = new SavingAccount("Alice", 1000, 5);

    console.log("Initial balance:", alice.getBalance());

    alice.deposit(500);
    console.log("After deposit 500:", alice.getBalance());

    try {
        alice.withdraw(2000);
    } catch (err) {
        console.error("Withdraw error:", err.message);
    }

    try {
        alice.deposit(-100);
    } catch (err) {
        console.error("Deposit error:", err.message);
    }

    alice.addInterest();
    console.log("After adding interest:", alice.getBalance());

} catch (err) {
    console.error("Unexpected error:", err.message);
}


// homework 
let book1 = {
    isbn: 123456789,
    title:"JavaScript",
 
}
let book2 = {
    isbn: 123456789,
    title:"JavaScript",
}
 
function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
 
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1){
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
 
}
console.log("shallow Equality: "+ shallowEquality(book1,book2));
