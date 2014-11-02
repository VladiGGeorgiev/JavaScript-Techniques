function Person(name) {
	this.name = name
}

function Student (name, grade) {
	Person.call(this, name);
	this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var p = new Person("Pesho");
var m = new Person("Maria");

Person.prototype.sayHi = function () {
	console.log(this);
}

Person.hello = function () {
	console.log(this);
}

console.log(Student.prototype);