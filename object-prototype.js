function Person(name) { this._name = name; }

function Student(name, grade) { 
	Person.call(this, name);
	this._grade = grade; 
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var st = new Student("Pesho", 3);
console.log(st);