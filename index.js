// function User (name, email, username, phone) {
//   this.name = name
//   this.email = email
//   this.username = username
//   if (phone) {
//     this.phone = phone
//   } else {
//     this.phone = 1111111111
//   }
// }

// function Student (name, email, username, phone, grade, gpa) {
//   User.call(this, name, email, username, phone)
//   this.grade = grade
//   this.gpa = gpa
// }

// function Teacher (name, email, username, phone, subject) {
//   User.call(this, name, email, username, phone)
//   this.subject = subject
// }

// const student = new Student('John Doe', 'johndoe@gmail.com', 'johndoe', 1234567890, 11, 4.0)
// const teacher = new Teacher('James Doe', 'jamesDoe@gmail.com', 'jamesdoe', null,'Math')

// console.log(student)
// console.log(teacher)


// class User {
//   constructor (name, email, username) {
//     this.name = name
//     this.email = email
//     this.username = username
//   }
// }

// class Student extends User {
//   constructor (name, email, username, grade, gpa) {
//     super(name, email, username)
//     this.grade = grade
//     this.gpa = gpa
//   }
// }

// class Teacher extends User {
//   constructor (name, email, username, subject) {
//     super(name, email, username)
//     this.subject = subject
//   }
// }

// const student = new Student('John Doe', 'johndoe@gmail.com', 'johndoe', 11, 4.0)
// const teacher = new Teacher('James Doe', 'jamesDoe@gmail.com', 'jamesdoe', 'Math')

// console.log(student)
// console.log(teacher)

console.log('johndoegmail.com'.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))