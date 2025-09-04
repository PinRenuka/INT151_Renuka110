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
