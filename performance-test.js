function Student1(name, grade) {
	this.name = name;
	this.grade = grade;
}

Student1.prototype.introduce = function introduce() {
	this.asd = "asd";
	return this;
};

var start1 = new Date();
for (var i = 0; i < 1000000; i++) {
	var st1 = new Student1('Pesho', 3);
};
var end1 = new Date();
var time1 = end1 - start1;
console.log(time1);



// Wrong classical OOP test
function Student(name, grade) {
	this.name = name;
	this.grade = grade;

	this.introduce = function introduce() {
		this.asd = "asd";
		return this;
	}
}

var start2 = new Date();
for (var i = 0; i < 1000000; i++) {
	var st2 = new Student('Pesho', 3);
};
var end2 = new Date();
var time2 = end2 - start2;
console.log(time2);



// Functional Pafel OOP
function Person1(name, grade) {
	return {
		name: name,
		grade: grade,
		introduce: function introduce() {
			this.asd = "asd";
			return this;
		}
	}
}

var start3 = new Date();
for (var i = 0; i < 1000000; i++) {
	var st3 = new Person1('Pesho', 3);
};
var end3 = new Date();
var time3 = end3 - start3;
console.log(time3);



// Prototypal
var Person = {
	init: function init(name, age) {
		this.name = name;
		this.age = age;

		return this;
	},

	introduce: function introduce() {
		this.asd = "asd";
		return this;
	}
};

var start4 = new Date();
for (var i = 0; i < 1000000; i++) {
	var st4 = Object.create(Person).init('Pesho', 3);
};
var end4 = new Date();
var time4 = end4 - start4;
console.log(time4);